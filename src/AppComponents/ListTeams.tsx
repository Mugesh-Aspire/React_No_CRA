import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { ColumnsType } from 'antd/es/table';
import { Button, Table, Form } from 'antd';
import _isEmpty from 'lodash/isEmpty'

import { fetchTeamList, handleKeys, logoutSuccess } from '../ReduxStore/reducer.tsx'
import { globalLabels, validationMessages } from '../Constants/strings'
import Loading from "../Common/LoadingSpinner.tsx";
import NoRecords from "../Common/NoRecords.tsx";
import CustomModal from "../Common/CustomModal.tsx";
import CreateTeam from "./CreateTeam/CreateTeam.tsx";
import { toast } from "react-toastify";
import { getDateFormat } from "../Common/Functions";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

export default function ListTeams() {

  const dispatch = useDispatch()
  const teamList = useSelector((state: any) => state.teamListDetails)
  const teamListLoading = useSelector((state: any) => state.teamListLoading)
  const [selectedModalName, setSelectedModalName] = useState('')
  const [selectedTeam, setSelectedTeam] = useState({})
  const createFormRef = useRef('')

  const columns: ColumnsType<DataType> = [
    {
      title: 'TeamName',
      dataIndex: 'TeamName',
      key: 'TeamName',
    },
    {
      title: 'GameActivityTag',
      dataIndex: 'GameActivityTag',
      key: 'GameActivityTag',
    },
    {
      title: 'StartDate',
      dataIndex: 'StartDate',
      key: 'StartDate',
    },
    {
      title: 'EndDate',
      dataIndex: 'EndDate',
      key: 'EndDate',
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (selectedTeam) => renderUserActions(selectedTeam),
    },
  ]

  useEffect(() => {
    dispatch(fetchTeamList())
  }, []);


  const renderUserActions = (selectedTeam) => {
    return <div className="d-flex justify-content-between align-items-center">
      <Button size="middle" onClick={() => onPressViewDetails(selectedTeam)} type="primary" className="mx-2">
        {globalLabels.VIEW_DETAILS}
      </Button>

      <Button size="middle" onClick={() => onPressDelete(selectedTeam)} type="primary" danger className="mx-2">
        {globalLabels.DELETE}
      </Button>
    </div>
  }
  const onPressViewDetails = (selectedTeam) => {
    setSelectedTeam(selectedTeam)
    setSelectedModalName(globalLabels.VIEW_TEAM)

  }
  const onPressDelete = (selectedTeam) => {
    let filteredItem = teamList.filter((item) => item.TeamName !== selectedTeam.TeamName)
    dispatch(handleKeys({ key: 'teamListDetails', value: filteredItem }))
  }
  const onPressCreateTeam = () => {
    setSelectedModalName(globalLabels.CREATE_TEAM)
  }
  const onPressLogOut = () => {
    dispatch(logoutSuccess())
  }
  const handleModalClose = () => {
    setSelectedModalName('')
  }
  const onFinish = (e) => {
    let updatedStartDate = getDateFormat(e[globalLabels.START_DATE])
    let updatedEndDate = getDateFormat(e[globalLabels.END_DATE])
    let updatedTeamList = [...teamList, { ...e, [globalLabels.START_DATE]: updatedStartDate, [globalLabels.END_DATE]: updatedEndDate }]
    dispatch(handleKeys({ key: 'teamListDetails', value: updatedTeamList }))
    createFormRef.current.resetFields()
    handleModalClose()

  }
  const onFinishFailed = (e) => {
    toast(validationMessages.PLEASE_FILL_ALL_DETAILS)

  }
  const renderModalChildren = () => {
    const {
      TeamName,
      TeamCode,
      TeamMemberCount,
      PlayerCount,
      GameActivityId,
      GameActivityTag,
      GameActivityIdTag,
      GameActivityDescription,
      StartDate,
      EndDate
    } = selectedTeam
    if (selectedModalName === globalLabels.VIEW_TEAM) {
      return <div className='row'>
        <div className='col'>
          <div className='d-flex flex-column'>
            <span>TeamName</span>
            <span>TeamCode</span>
            <span>TeamMemberCount</span>
            <span>PlayerCount</span>
            <span>GameActivityId</span>
            <span>GameActivityTag</span>
            <span>GameActivityIdTag</span>
            <span>GameActivityDescription</span>
            <span>StartDate</span>
            <span>EndDate</span>
          </div>
        </div>
        <div className='col'>
          <div className='d-flex flex-column'>
            <span>{TeamName}</span>
            <span>{TeamCode}</span>
            <span>{TeamMemberCount}</span>
            <span>{PlayerCount}</span>
            <span>{GameActivityId}</span>
            <span>{GameActivityTag}</span>
            <span>{GameActivityIdTag}</span>
            <span>{GameActivityDescription}</span>
            <span>{StartDate}</span>
            <span>{EndDate}</span>
          </div>
        </div>
      </div>
    } else {
      return <div>
        <Form
          name="createTeamForm"
          ref={createFormRef}
          id="createTeamForm"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <CreateTeam ref={createFormRef} />
        </Form>
      </div>
    }
  }

  return <div>
    <div className="d-flex justify-content-end p-3">
      <Button className="mx-2" onClick={onPressLogOut} danger> Logout </Button>
    </div>
    <div className={`d-flex justify-content-center align-items-center ${_isEmpty(teamList) ? 'h-100' : ''}`}>

      {
        _isEmpty(teamList) ?
          teamListLoading ?
            <Loading /> :
            <NoRecords /> : <div className="p-3">
            <h3>{globalLabels.TEAM_LIST}</h3>
            <div className="d-flex justify-content-end">
              <Button size="middle" type="primary" className="mx-2" onClick={onPressCreateTeam}>
                {globalLabels.CREATE_TEAM}
              </Button>
            </div>
            <div>
              <Table columns={columns} dataSource={teamList} />
            </div>
            <CustomModal
              isVisible={selectedModalName ? true : false}
              handleCancel={handleModalClose}
              title={selectedModalName}
              successButtonLabel={selectedModalName === globalLabels.CREATE_TEAM ? globalLabels.SAVE : ''}
              formName="createTeamForm"
            >
              {renderModalChildren()}
            </CustomModal>
          </div>
      }
    </div>
  </div>
}
