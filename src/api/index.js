import axios from 'axios'
// 配置基准路径
axios.defaults.baseURL = 'http://139.196.77.121:8088'
// http://139.196.77.121:8088
// axios.interceptors.request.use(config => {
//   // 统一添加 Authorization 请求头
//   config.headers.Authorization = localStorage.getItem('token')
//   // 一定要返回 config
//   return config
// })
// 获取聊天人员的数据
export const getChatUsers = (pageNo, pageSize, hrId) =>
  axios.get('/hr/myTalkLogList', {
    params: {
      pageNo,
      pageSize,
      hrId
    }
  })
// 概况数据
export const getSurveyData = linkId =>
  axios.get('/hr/positionInfo', {
    params: {
      linkId
    }
  })
// 获取job中发布中的表格数据
export const getPublishing = (page, pageSize, query) =>
  axios.get('/hr/positionList', {
    params: {
      pageNo: page,
      pageSize: pageSize,
      linkId: 4,
      searchValue: query,
      status: 0
    }
  })
// 删除数据
export const delJob = ids =>
  axios.post('/hr/deletePosition', {
    ids
  })
// 获取job中待审核的表格数据
export const getPending = (page, pageSize, query) =>
  axios.get('/hr/positionList', {
    params: {
      pageNo: page,
      pageSize: pageSize,
      linkId: 4,
      searchValue: query,
      status: 1
    }
  })
// 获取job中所有职位的表格数据
export const allJob = (page, pageSize, query, status) =>
  axios.get('/hr/positionList', {
    params: {
      pageNo: page,
      pageSize,
      searchValue: query,
      linkId: 4,
      status
    }
  })

// 获取人才列表
export const getResumeList = (
  pageNo,
  pageSize,
  city,
  degree,
  expirencetime,
  salar,
  sex,
  searchValue
) =>
  axios.get('/hr/indexResumeList', {
    params: {
      pageNo,
      pageSize,
      city,
      degree,
      expirencetime,
      salar,
      sex,
      searchValue
    }
  })

// 获取收件箱列表
export const getInboxList = (
  pageNo,
  pageSize,
  searchValue,
  sex,
  expirence,
  salar,
  title,
  linkid
) =>
  axios.get('/hr/inboxList', {
    params: {
      pageNo,
      pageSize,
      searchValue,
      sex,
      expirence,
      salar,
      title,
      linkid
    }
  })

// 获取已预约表格数据
export const getBookedList = (pageNo, pageSize, linkId) =>
  axios.get('/hr/interviewList', {
    params: {
      pageNo,
      pageSize,
      linkId
    }
  })
// 获取已面试表格数据
export const getInterviewedList = (pageNo, pageSize, linkId) =>
  axios.get('/hr/interviewList', {
    params: {
      pageNo,
      pageSize,
      linkId
    }
  })
// 获取我的收藏列表
export const getCollectionList = (pageNo, pageSize, linkId) =>
  axios.get('/hr/interviewFavList', {
    params: {
      pageNo,
      pageSize,
      linkId,
      state: '1'
    }
  })
// 获取以下载简历表格数据
export const getDownloadedList = (pageNo, pageSize, linkId) =>
  axios.get('/hr/interviewDownloadList', {
    params: {
      pageNo,
      pageSize,
      linkId,
      state: '1'
    }
  })
// 设置的基本信息
export const getBasicInfo = linkId => axios.get(`/hr/getHrInfo/${linkId}`)
// 获取所有的城市
export const getCity = () => axios.get('/common/getAllCitys')
// 字典查询
export const getInfo = typeName =>
  axios.get(`/common/getDicCodeByType?type=${typeName}`)
// 字典查询 获取所有职位
export const getAllPosition = () => axios.get('/hr/allPositionList')
// 基本信息保存
export const saveBasicInfo = (company, hr, fuli, path) =>
  axios.post('/hr/updateHrInfo', { company, hr, fuli, path })
// 发送验证码
export const getCode = phoneNum => axios.get(`/common/getCheckCode/${phoneNum}`)
// 修改手机号
export const revisePhoneNum = (mobile, newMobile, code) =>
  axios.post('/hr/updatePhone', {
    mobile,
    newMobile,
    code
  })
// 修改密码
export const revisePassword = (oldPassword, newPassword) =>
  axios.post('/hr/updateUserPassword', {
    oldPassword,
    newPassword
  })
// 短信登录
export const login = (mobile, code, password, type) =>
  axios.post('/hr/login', {
    mobile,
    code,
    password,
    type
  })
// 获取所有的省
export const getAllProvince = () => axios.get('/common/getAllProvince')

// 获取职位类别
export const getPositionType = () => axios.get('/common/getPositionType')
// 发布职位
export const publishPosition = (
  companyid,
  linkid,
  title,
  positiontype,
  city,
  positiondesc,
  expirence,
  salar,
  degree,
  address,
  recruitType
) =>
  axios.post('/hr/publishPosition', {
    companyid,
    linkid,
    title,
    positiontype,
    city,
    positiondesc,
    expirence,
    salar,
    degree,
    address,
    recruitType
  })
// 获取二维码
export const getQr = () => axios.get('/hr/getQRLoginId')
// 邀请面试
export const interview = data => axios.post('/hr/inviteInterview', data)
// 删除收件箱数据
export const delResume = ids =>
  axios.post('/hr/deleteResume', {
    ids
  })
