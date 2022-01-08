import identityService from '../../services/identityService'

function Home() {
    return (
      <div>
         Home Page
         <button onClick={() => identityService.user ='Anon'}>{identityService.user}</button>
      </div>
    );
}

export default Home;