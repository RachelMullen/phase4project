import twitterLogo from '../assets/twitterLogo.png'
import twitterLoginGraphic from '../assets/twitterLoginGraphic.jpeg'

function Login () {
    function handleClick() {
        const popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
      }

    return (
       <div className='login'>
            <img className='twitter_login_image' alt='twitter_login_image' src={twitterLoginGraphic} />
                <div className='login_content'>
                    <img className='twitter_logo' alt='twitter_logo' src={twitterLogo} />
                    <h1 className='login_header'>
                        Happening now
                    </h1>
                    <h2 className='login'>
                        Join Twitter today.
                    </h2>
                        <div className='popup'>
                            <button onclick={handleClick}>
                                Sign up with phone or email
                            </button>
                            <span class="popuptext" id="myPopup">Popup text...</span>
                        </div>
                    <p>
                        By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
                    </p>
                    <h6>
                        Already have an account? 
                    </h6>
                    <button>
                        Sign in
                    </button>
                </div>
        </div>
    );
}

export default Login;