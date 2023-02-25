/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { AiFillLock } from "react-icons/ai"
import { MdLocationOn } from "react-icons/md"
import { dataActions } from '../../store';
import Loader from "../../components/Loader"
import { isEmptyValue } from '../../utils/general';
import TableList from '../../components/TableList';
import Pagination from "../../components/Pagination"

import "./homepage.css"

const Homepage = () => {
    const dispatch = useDispatch()
    const data = useSelector(x => x.data.all)
    const [isLoading, setIsLoading] = useState(true)
    const [param, setParam] = useState({
        page: 1,
        description: "",
        location: "",
        full_time: false
    })

    const [currentParam, setCurrentParam] = useState({
        ...param
    })

    const onChangeFilter = (key, val) => {
        setParam({ ...param, [key]: val })
    }

    const onSubmitFilter = (e) => {
        e.preventDefault()
        setCurrentParam({ ...currentParam, ...param, page: 1 })
        setIsLoading(true)
    }

    useEffect(() => {
        if (isLoading) dispatch(dataActions.getAll({ param }))
        return () => setIsLoading(false)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading])

    const handleChangeParam = (num) => {
        setParam({ ...param, 'page': num })
        setIsLoading(true)
    }

    return (
        <div className='homepage_section'>
            <div className='col-md-12'>
                <Form onSubmit={onSubmitFilter}>
                    <div className='row'>
                        <Form.Group className='col-md-4'>
                            <Form.Label className='homepage_label'>Job Description</Form.Label>
                            <div className='inputWithIcon'>
                                <input
                                    type="text"
                                    placeholder='Filter by title, benefits, companies, expertise'
                                    value={param.description}
                                    onChange={e => onChangeFilter("description", e.target.value)}
                                />
                                <AiFillLock />
                            </div>
                        </Form.Group>
                        <Form.Group className='col-md-4'>
                            <Form.Label className='homepage_label'>Location</Form.Label>
                            <div className='inputWithIcon'>
                                <input
                                    type="text"
                                    placeholder='Filter by city, state, zip code or country'
                                    value={param.location}
                                    onChange={e => onChangeFilter("location", e.target.value)}
                                />
                                <MdLocationOn />
                            </div>
                        </Form.Group>
                        <Form.Group className='col-md-2'>
                            <Form.Label className='homepage_check'></Form.Label>
                            <div className="form-check homepage_check_section ">
                                <input type="checkbox"
                                    className="form-check-input mt-2"
                                    onClick={() => onChangeFilter("full_time", !param.full_time)}
                                />
                                <label className="homepage_label mt-1 px-2">Full Time Only</label>
                            </div>
                        </Form.Group>
                        <Form.Group className='col-md-2'>
                            <Form.Label className='homepage_button_section'></Form.Label>
                            <Button size='xl' className='col-md-6 homepage_button_bg' type="submit">Search</Button>
                        </Form.Group>
                    </div>
                </Form>
                <Card className='homepage_card'>
                    <Card.Body>
                        <div className='homepage_title'>
                            <h2>Job List</h2>
                            <hr />
                        </div>
                        {
                            data.loading ? <Loader /> :
                                data.error ? <Alert variant='danger'>{data.data.message}</Alert> :
                                    !data.loading && !data.error && !isEmptyValue(data.data) &&
                                    data.data?.filter(row => row !== null).map((row) => (
                                        <div key={row.id}>
                                            <TableList tableData={row} />
                                        </div>
                                    ))
                        }
                        <>
                            <p>Showing {data.data?.filter(row => row !== null).length || "0"} Jobs</p>
                        </>

                        {
                            !data.loading && !data.error &&
                            <div className="mt-2 mb-2 d-grid justify-content-center">
                                <Pagination
                                    total={18}
                                    limit={10}
                                    current={(param.page)}
                                    changePage={(page) => {
                                        handleChangeParam(page)
                                    }}
                                />
                            </div>
                        }
                    </Card.Body>
                </Card>
            </div>

        </div>
    )
}

export default Homepage
