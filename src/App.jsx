import StoreButton from './components/StoreButton.jsx';
import './App.css';
import t from './translations.js'


function App() {
  
  return (
    <>
      <div className='flex items-center justify-center gap-3 w-screen'>
        <StoreButton store="Google Play" theme="dark" text={t("GET IT ON")} googlePlayPackageId={"your.googlePlay.package"} ></StoreButton>
        <StoreButton store="App Store" theme="dark" text={t("Download on the")} appStoreAppId={"yourAppStoreAppId"} ></StoreButton>
        <StoreButton store="Google Play" theme="light" text={t("GET IT ON")} googlePlayPackageId={"your.googlePlay.package"} ></StoreButton>
        <StoreButton store="App Store" theme="light" text={t("Download on the")} appStoreAppId={"yourAppStoreAppId"} ></StoreButton>
      </div>
    </>
  )
}

export {App, StoreButton}
