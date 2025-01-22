const signUp = async (req, res) => {
    const data = req.body;
    console.log(data)
    res.json({ message: "Data Received" });
}

module.exports = { signUp } 