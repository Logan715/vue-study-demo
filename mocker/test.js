const mockjs = require("mockjs");
const testSuccess = function(req, res) {
    return res.json({ code: 1, data: { name: mockjs.mock("@cfirst@clast") } });
};

const testFail = function(req, res) {
    return res.json({
        code: -1,
        note: "测试失败"
    });
};

const fail500 = function(req, res) {
    res.status(500);
    return res.json();
};
const fail403 = function(req, res) {
    res.status(403);
    return res.json();
};

exports.default = {
    "POST /api/test/success": testSuccess,
    "GET /api/test/fail": testFail,
    "GET /api/test/fail403": fail403,
    "GET /api/test/fail500": fail500
};
