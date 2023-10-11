import Image from "next/image";
export default function ConversationForm() {
  return (
    <div className="jeffery">
      <div id="display">
        <Image
          src="static/jeffery.svg"
          width={150}
          height={150}
          alt="dev jeffery"
        />

        <p>
          {" "}
          Want to discuss a startup collaboration? I&apos;m most definitely
          game.
        </p>

        <div className="form-wrapper">
          <form action="https://formspree.io/f/mwkjpala" method="post">
            <input
              className="input-field "
              type="text"
              placeholder="Name"
              id="name"
              required
            />
            <br />
            <br />

            <input
              className="input-field "
              type="text"
              placeholder="Email"
              id="email"
              required
            />
            <br />
            <br />

            <div className="inline">
              <select aria-placeholder="Proect Type" className="input-field">
                <option value="-1">select Project Type</option>

                <option value="">Investor</option>
                <option value="collaboration">Collaboration</option>
              </select>

              <select aria-placeholder="Country" className="input-field">
                <option value="-1">Select your country</option>
                <option value="1">USA</option>
                <option value="2">Canada</option>
                <option value="3">UK</option>
                <option value="4">Egypt</option>
                <option value="5">Germany</option>
                <option value="6">Ghana</option>
                <option value="7">Nigeria</option>
              </select>
            </div>
            <br />
            <br />

            <textarea rows="8" placeholder="Additional details..." required />
            <br />
            <br />

            <input
              type="submit"
              name="submit"
              value="send"
              className="submit"
            />
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}
