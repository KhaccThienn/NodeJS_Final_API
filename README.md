### NodeJS API Token app

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
Sử dụng NodeJS để viết API cho các ứng dụng web app, có sử dụng JWT.
	
## Technologies
Project này được xây dựng bằng các module - package sau: 
* [ExpressJS](https://expressjs.com/)
* [Body-Parser](https://www.npmjs.com/package/body-parser)
* [Dot ENV (.env)](https://www.npmjs.com/package/dotenv)
* [Multer](https://www.npmjs.com/package/multer)
* [MySQL](https://www.npmjs.com/package/mysql)
* [JSON Web Token (JWT)](https://www.npmjs.com/package/jsonwebtoken)
* [BCrypt](https://www.npmjs.com/package/bcrypt)

	
## Setup
#### Tải các tài nguyên cần thiết bằng câu lệnh sau:

```
$ npm install
```

#### Project này xây dựng dưới dạng microservice, nên khi chạy, phải chạy đồng thời 2 thứ
##### Chạy app: 
```
$ npm start
```

##### Chạy server:
```
$ npm run dev
```