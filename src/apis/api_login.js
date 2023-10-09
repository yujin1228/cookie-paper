const login = async (id, password) => {
    const baseUrl = "https://api.mandarin.weniv.co.kr";
    const reqPath = "/user/login";

    const loginData = {
        user: {
            id: id,
            password: password
        }
    };
    try {
        const token = await fetch(baseUrl + reqPath, {
            method: "POST",
            headers: {
            "Content-type": "application/json",
            },
            body: JSON.stringify(loginData),
        })
        .then((res) => res.json())
        .then((data) => data.user.token)
        .catch(console.error("유저의 Token 정보가 없습니다."));
        console.log(token);

        localStorage.setItem("token", token);
        } catch (e) {
        alert("유저의 정보가 없습니다.", e);
    }
};
