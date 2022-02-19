import DescriptionIndex from "./description"
import SliderIdex from "./slider"
import CustomizationIndex from "./customization";
import SgmentDescriptionIndex from "./segmentDescription";
import axiosInstance from "../../../axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { homeActions } from "../../../store/home";
import { useEffect } from "react";
import { DefaultConfiguration, Portlet, Segment } from "../../../type";
import { portletActions } from "../../../store/portlet";
import { Istate } from "../../../store";

const HomeIndex = () => {

    const dispatch = useDispatch();
    const currentSegment_id = useSelector((state: Istate) => state.home.currentSegment_id)
    const currentSegment = useSelector((state: Istate) => state.home.currentSegment)

    useEffect(() => {
        const GetSegments = async () => {
            let segmentList: Segment[] = [];
            try {
                const response = await axiosInstance.get("/business/segment/getAll");
                segmentList = response.data.content;
            } catch (err) {

            }
            dispatch(homeActions.setSegmants(segmentList));

            let segmentListIds: number[] = []
            segmentList.forEach(element => {
                segmentListIds.push(element.segmentId)
            });
            let segmentPortlets: { segment_id: number, portlets: Portlet[] }[] = [];
            const promises = segmentListIds.map(segmentId => {
                const url = `api/portlet/?segmentId=${segmentId}&pageName=HOME`
                return axiosInstance.get(url)
            })

            Promise.all(promises)
                .then((res) => {
                    res.forEach(element => {
                        //need to make sure that a segment has at least a portlet 
                        if (element.data.length > 0) {
                            segmentPortlets.push({
                                segment_id: element.data[0]?.p_segmentRef_Id,
                                portlets: element.data
                            })
                        }
                    });
                    segmentPortlets?.sort(function (a, b) {
                        var keyA = a.portlets.find(element => element.position = "SLIDER")?.imageDisplayingOrder,
                            keyB = b.portlets.find(element => element.position = "SLIDER")?.imageDisplayingOrder;
                        if (keyA && keyB) {
                            if (keyA < keyB) return -1;
                            if (keyA > keyB) return 1;
                        }
                        return 0;
                    });
                    console.log(segmentPortlets, 'po')
                    dispatch(portletActions.setPortlet(segmentPortlets))
                    dispatch(homeActions.setcurrentSegment(segmentPortlets[0].segment_id))
                })
                .catch(err => console.log("err", err))
        }
        GetSegments();

    }, [])

    useEffect(() => {
        dispatch(homeActions.setLoadDefaultConfiguration(true))
        setTimeout(() => {
            axiosInstance.get(`api/config/defaultConfig/${currentSegment?.configId}/${currentSegment?.segmentId}/MAD`)
                .then((res) => {
                    const defaultConfiguration: DefaultConfiguration = {
                        nbrFlight: res.data.baseConfig.nbrFlights,
                        dayToDeparture: res.data.dayToDeparture.nbrDays,
                        delay: res.data.passDelay.nbrMonths,
                        price: res.data.flightpassPrice
                    }
                    dispatch(homeActions.setDefaultConfiguration(defaultConfiguration))
                    dispatch(homeActions.setLoadDefaultConfiguration(false))
                })
        }, 500)

    }, [currentSegment])

    return (
        <div className="home">
            <div className="top-side">
                <SliderIdex />
                <CustomizationIndex />
                <DescriptionIndex />
                {/*<SgmentDescriptionIndex />*/}
            </div>
        </div>

    )

}
export default HomeIndex