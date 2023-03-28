//file
const [nameRoush, setNameRoush] = useState([] as any);
  const changeFile = (e: any) => {
    try {
      switch (e.target.name) {
        case "fileName":
          let newNames = [...nameRoush, e.target.files[0]];
          setNameRoush(newNames);
          break;

        default:
        // refNotification.current.showNotification(
        //   "warning",
        //   "File không hợp lệ"
        // );
      }
    } catch (error) {
      // refNotification.current.showNotification("warning", "File không hợp lệ");
    }
  };

  const saveAnh = async () => {
    var formData = new FormData();

    for (let i = 0; i < nameRoush.length; i++) {
      formData.append("files", nameRoush[i]);
    }

    fetch("http://localhost:3000/api/file/create", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };


    --> xml
     <section className="">
          <section className="text-2x1">
            <img loading="lazy" alt="icon" width={32} height={32} src={Icon} />
            <span>KoKuro</span>
          </section>

          <input
            type="file"
            name="fileName"
            multiple
            onChange={(e) => {
              changeFile(e);
            }}
          />
          <button
            type="submit"
            onClick={(e) => {
              saveAnh();
            }}
          >
            Save
          </button>
        </section>