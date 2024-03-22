
const Contact = () => {
    return (
        <section
      id="contact"
      className=" mx-auto py-10 flex flex-col gap-4 bg-[#2f3542] items-center justify-center"
    >
      <h2 className="font-bold text-4xl text-[#ffdd00]">Let us create awesome products!</h2>
      <p className="max-w-[600px] text-center text-white">
       We are currently looking for any new opportunities, Inbox
        is always open. Whether you have a question or just want to say hi, We will
        try our best to get back to you!
      </p>

      <a href="mailto:darktechteam@gmail.com">
        <button
              className="text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600  px-4 py-2 rounded-md transition duration-300 ease-in-out"
              >
          Say Hello
        </button>
      </a>
    </section>
    );
};

export default Contact;