function App() {
  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <h2>Newsletter Signup</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <fieldset>
          <legend>Areas of Interest:</legend>
          <div>
            <input type="checkbox" id="technology" name="interests" value="technology" />
            <label htmlFor="technology">Technology</label>
          </div>
          <div>
            <input type="checkbox" id="design" name="interests" value="design" />
            <label htmlFor="design">Design</label>
          </div>
          <div>
            <input type="checkbox" id="business" name="interests" value="business" />
            <label htmlFor="business">Business</label>
          </div>
        </fieldset>
      </form>
    </main>
  );
}

export default App;
