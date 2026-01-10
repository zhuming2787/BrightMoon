import Mock from 'mockjs';

// 模拟登录/注册接口（适配你的form字段和响应逻辑）
export default [
	{
		// 务必替换为你实际的API.USER.LOGIN路径（比如'/api/user/login'）
		url: `/api/user/login`,
		method: 'post',
		// 兼容所有版本的参数获取方式，解决req数据为空的问题
		response: req => {
			// 整合所有可能的参数来源（确保能拿到前端传的form数据）
			const formData = {
				...req.query, // URL参数
				...req.params, // 路径参数
				...(req.body || {}), // POST请求体（核心：你的form数据在这里）
			};

			// 调试日志：在Vite终端打印接收到的参数，方便排查
			console.log('【Mock】接收到的登录/注册参数：', formData);

			// 解构前端传的表单字段（和你的registerForm/ref一致）
			const { username, password, nickname } = formData;

			// ========== 1. 校验必填参数（模拟后端校验逻辑） ==========
			// 登录场景：校验用户名/密码
			if (!username) {
				return {
					code: 1001,
					msg: '用户名不能为空',
					result: null,
				};
			}
			if (!password || password.length < 6) {
				return {
					code: 1002,
					msg: '密码不能为空且长度不能少于6位',
					result: null,
				};
			}
			// 注册场景：额外校验昵称
			if (nickname && nickname.trim() === '') {
				return {
					code: 1003,
					msg: '昵称不能为空',
					result: null,
				};
			}

			// ========== 2. 模拟成功响应（完全匹配你的前端判断逻辑） ==========
			// 生成符合要求的随机mock数据
			const mockResult = {
				// 随机唯一token（模拟真实后端返回）
				token: Mock.mock('@guid()'),
				refreshToken: Mock.mock('@guid()'),
				// 用户信息：包含前端需要的所有字段（和你的userInfo逻辑匹配）
				userinfo: {
					id: Mock.mock('@id'), // 随机用户ID
					username: username, // 前端传的用户名
					nickname: nickname || username, // 注册传了nickname就用，否则用username
					avatar: Mock.mock('@image("100x100", "#f0f2f5", "#666666", "png", "头像")'),
					createTime: Mock.mock('@datetime'), // 随机创建时间
					roles: ['user'], // 默认用户角色
				},
			};

			// 返回最终响应（完全匹配你前端res.code === 0的判断）
			return {
				code: 0, // 前端核心判断条件
				msg: nickname ? '注册成功' : '登录成功', // 区分登录/注册提示
				result: mockResult, // 包含token、refreshToken、userinfo
			};
		},
	},
];
