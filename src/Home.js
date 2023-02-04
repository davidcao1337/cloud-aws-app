import cloudLogo from './assets/cloud-flat.png'
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <img className="mt-24 mb-10" src={cloudLogo} alt="" width="230" height="69" />
      <h2 className="mb-5 font-bold text-3xl text-[#525252]">Welcome to my Cloud App!</h2>
    </div>
  );
}
 
export default Home;
