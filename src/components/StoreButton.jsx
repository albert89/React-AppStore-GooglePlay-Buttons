import googlePlayIcon from '../assets/stores/google-play-icon.svg';
import appStoreIcon from '../assets/stores/apple-icon.svg';
import appStoreIconLight from '../assets/stores/apple-light-icon.svg';


function StoreButton({store, theme, text, googlePlayPackageId, appStoreAppId}){

  const openStore = (store) => {

    const userLang = navigator.language || navigator.userLanguage; // es. "it-IT" o "en"
    const [lang, country] = userLang.split("-");

    if (store == "App Store") {

      var appStoreLink = `https://apps.apple.com/app/id${appStoreAppId}`;

      if (country) {
        appStoreLink = `https://apps.apple.com/${country.toLowerCase()}/app/id${appStoreAppId}`;
      }
    
      window.open(appStoreLink, '_blank');

    } else {
       
      var googlePlayLink = `https://play.google.com/store/apps/details?id=${googlePlayPackageId}`;

      if (lang && country) {
        googlePlayLink += `&hl=${lang}&gl=${country}`;
      } else if (lang) {
        googlePlayLink += `&hl=${lang}`;
      }
    
      window.open(googlePlayLink, '_blank');
    }
  }

  const icon = store === 'App Store' ? (theme === 'light' ? appStoreIcon : appStoreIconLight) : googlePlayIcon;

  return (
    <button  onClick={()=> openStore(store)} className={ (theme == "light" ? "text-gray-800 bg-white border-black" : "text-white bg-black border-white") + " border-1 font-bold py-1 px-4 rounded-lg flex cursor-pointer" }>
      <img src={icon} alt={`${store} icon`} className="inline-block mr-2" />
      <div className='text-left'>
        <span className='text-xs'>
          {text}
        </span>
        <div className='-mt-2'>
          <span className='text-xl font-black'>
            {store}
          </span>
        </div>
      </div>
    </button>
  );
}

export default StoreButton;