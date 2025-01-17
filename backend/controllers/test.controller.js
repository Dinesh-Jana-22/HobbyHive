function handleTest(req,res) {
    res.json({
        message: "Hello World!",
        isWorking: "Yes"
    })
}

module.exports = handleTest;