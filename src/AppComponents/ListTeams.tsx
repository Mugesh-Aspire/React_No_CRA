import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { ColumnsType } from 'antd/es/table';
import { Button, Table, } from 'antd';
import { Alert, Spin } from 'antd'
import _isEmpty from 'lodash/isEmpty'

import { fetchTeamList } from '../ReduxStore/reducer.tsx'
import { globalLabels } from '../Constants/strings'
import Loading from "../Common/LoadingSpinner.tsx";
import NoRecords from "../Common/NoRecords.tsx";

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

  const columns: ColumnsType<DataType> = [
    {
      title: 'TeamName',
      dataIndex: 'TeamName',
      key: 'TeamName',
      render: text => <a>{text}</a>,
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
      render: () => renderUserActions(),
    },
  ]

  useEffect(() => {
    dispatch(fetchTeamList())
  }, []);

  console.log('teamList', teamList)

  const renderUserActions = () => {
    return <div className="d-flex justify-content-between align-items-center">
      <Button size="middle" onClick={onPressViewDetails} type="primary" className="mx-2">
        {globalLabels.VIEW_DETAILS}
      </Button>
      <Button size="middle" onClick={onPressDelete} type="primary" className="mx-2">
        {globalLabels.DELETE}
      </Button>
    </div>
  }
  const onPressViewDetails = () => {

  }
  const onPressDelete = () => {

  }


  return <div className={`d-flex justify-content-center align-items-center ${teamListLoading ? 'h-100' : ''}`}>
    {
      _isEmpty(teamList) ?
        teamListLoading ?
          <Loading /> :
          <NoRecords /> : <div className="d-flex p-3">
          <Table columns={columns} dataSource={teamList} />
        </div>
    }
  </div>;
}
