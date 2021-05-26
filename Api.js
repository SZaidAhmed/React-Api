const addIdApi = async()=>{
    var add={
      front : a1,
      back : a2,
      userId : profile.userId,
    }
    const hello = await fetch("https://api.ongstercare.com/add_id", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(add),
        });
        //console.log(formData)
        //addStarter(formData);
        // hello(formData);
        const resp = await hello.json();
        console.log(resp);
        // console.log("response =====>", resp.token);
        // localStorage.setItem("token1", resp.token);
        // localStorage.setItem("res", resp);
  }