const App = () => {
  return (
    <div>
      <p className="text-blue-600 text-6xl text-center">Manga App</p>
      <div className="m-10 border border-blue-500 ">
        <div>
          <h1>Your List!</h1>
          <MangaList />
        </div>
        <div>
          <h1>Your friend</h1>
          <FriendList />
        </div>
      </div>
    </div>
  );
};

export default App;
