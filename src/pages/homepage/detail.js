/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react'
import _ from "lodash";
import { useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { dataActions } from '../../store'
import { Card } from 'react-bootstrap'
import { BiArrowBack } from "react-icons/bi"
import { AiFillCheckCircle } from "react-icons/ai"
import Logo from "../../assets/github.png"

import "./homepage.css"

const DetailHomepage = () => {
    const { id } = useParams()
    const router = useNavigate()
    const dispatch = useDispatch()
    const detail = useSelector(x => x.data.detail)
    const data = detail?.data ? detail.data : "Not Found"
    const logos = Logo

    useEffect(() => {
        if (!_.isNull(id)) dispatch(dataActions.getDetail({ id: id }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const brokenImage = (e) => {
        e.target.src = logos
    }

    return (
        <div className='detail_section'>
            <BiArrowBack className='detail_icon_back'/> <span className='detail_back' onClick={() => router(-1)}>Back</span>
            <Card className='col-md-12 homepage_card mt-3'>
                <Card.Body>
                    <p className='detail_type'>{data.type} / {data.location}</p>
                    <h3 className='detail_title'>{data.title}</h3>
                    <hr className='mt-4' />
                    <div className='col-md-12'>
                        <div className='row'>
                            <div className='col-md-8'>
                                <div dangerouslySetInnerHTML={{ __html: data.description }} />
                            </div>
                            <div className='col-md-4'>
                                <Card className='detail_card_company'>
                                    <div className='detail_company_title'>
                                        <Card.Title>{data.company}</Card.Title>
                                        <AiFillCheckCircle style={{ fontSize: "25px" }} />
                                    </div>
                                    <hr style={{ marginTop: "8px" }} />
                                    <div className='text-center'>
                                        <img src={data.company_logo}
                                            onError={brokenImage}
                                            className="detail_logo"
                                            loading="lazy"
                                            alt='logo'
                                        />
                                    </div>
                                    <hr />
                                    <a href={data.company_url} className="detail_url">{data.company_url}</a>
                                </Card>
                                <Card className='detail_card_apply'>
                                    <div className='detail_company_title'>
                                        <Card.Title>How to Apply</Card.Title>
                                    </div>
                                    <hr style={{ marginTop: "3px" }} />
                                    <div dangerouslySetInnerHTML={{ __html: data.how_to_apply }} />
                                </Card>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DetailHomepage
