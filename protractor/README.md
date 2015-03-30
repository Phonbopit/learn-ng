Learn Protractor

## Step 1 : Install Protractor

ทำการติดตั้ง [Protractor](https://github.com/angular/protractor) ด้วยคำสั่ง 

```
npm -g install protractor
```

จากนั้นสั่งอัพเดท `webdriver-manager` ซึ่งมันจะไปโหลดตัว Selenium Server รวมถึง Chrome Driver

```
webdriver-manager update
```

## Step 2 : Protractor Configuration

Protractor จะใช้ 2 ไฟล์คือ spec file และ configuration file.

1. spec file : ก็คือไฟล์พวก `spec.js` 
2. configuration file : คือไฟล์ config ตั้งชื่อว่า `protractor.conf.js`

สร้างไฟล์ `protractor.conf.js` ตั้งค่าดังนี้

```js
exports.config = {

	specs: [
		'./e2e/**/*.spec.js'
	],
	baseUrl: 'http://localhost:5555'
	
};
```

- `specs` : คือ path ของไฟล์ spec.js
- `baseUrl` : url ที่จะใช้ในการทดสอบ

ทำการ start selenium server

```

## References 

- [Learn Protractor Testing for AngularJS]
- [Protractor Tutorial](http://angular.github.io/protractor/#/tutorial)