// @ts-ignore
/* eslint-disable */
import {Request} from '@/common/request';

/** 获取用户信息 GET /api/iam/current/userinfo */
export async function getCurrentInfo(
  options?: { [key: string]: any },
) {
  return Request.get<API.CurrentUser>('/api/iam/current/userinfo', {}, options);
}


/** 退出登录接口 POST /api/login/outLogin */
export async function logout(options?: { [key: string]: any }) {
  localStorage.removeItem("TOKEN")
  return Request.delete<API.CurrentUser>('/api/iam/logout', {}, options);
}
