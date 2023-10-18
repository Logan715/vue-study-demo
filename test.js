// @ts-nocheck

const { ceil } = require("lodash")

const getLengths = (colStart, rowStart, colEnd, rowEnd) => {

}

const getColNumber = (colChar) => {
	const colChars = colChar.split('')
	if(colChars.length > 1 ) {
		 return colChars.reverse().map((_colChar, index)=> getColNumber(_colChar) * Math.pow(26, index )).reduce((a, b)=>a+b)
	} else {
		return colChar.charCodeAt() - 64
	}
}

const getColCharByColNumber = (colNumber) => {
	const remainder = (colNumber -1) % 26;
	const modulo = Math.floor((colNumber -1) / 26)
	const colChar = String.fromCharCode(65+ remainder)
	if(modulo) {
		return getColCharByColNumber(modulo) + colChar
	} 
	return colChar
}

var a = "A1:CP18"
const reg = /([A-Z]*)([0-9]*):([A-Z]*)([0-9]*)/
const [_, colStart, rowStart, colEnd, rowEnd] = a?.match(reg);
const colStartNumber = getColNumber(colStart)
const colEndNumber = getColNumber(colEnd)
const colLength = colEndNumber - colStartNumber +1
// console.log(colStart, rowStart, colEnd, rowEnd)
// console.log("colStart", getColNumber(colStart),)
// console.log("colEnd", getColNumber(colEnd),)
// console.log("colStart", getColCharByColNumber(getColNumber(colStart)))
// console.log("colEnd", getColCharByColNumber(getColNumber(colEnd)))
// console.log("colLength", colLength)
Array(colLength).fill().forEach((_, index)=> {
	console.log(getColCharByColNumber(colStartNumber+index), colStartNumber+index)
})
	// console.log(getColCharByColNumber(27))
	console.log(getColNumber("Z"))



