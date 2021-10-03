import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faTwitter, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function initFontAwesome() {
  library.add(fab, faTwitter, faFacebook, faLinkedin, faInstagram);
}
export default initFontAwesome;