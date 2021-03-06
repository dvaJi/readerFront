import { library } from '@fortawesome/fontawesome-svg-core';

import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp';
import { faFlag } from '@fortawesome/free-solid-svg-icons/faFlag';
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons/faWindowMaximize';
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';
import { faComments } from '@fortawesome/free-solid-svg-icons/faComments';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { faTasks } from '@fortawesome/free-solid-svg-icons/faTasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faThList } from '@fortawesome/free-solid-svg-icons/faThList';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faRss } from '@fortawesome/free-solid-svg-icons/faRss';
import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons/faFilePdf';
import { faFileArchive } from '@fortawesome/free-solid-svg-icons/faFileArchive';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';

import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';
import { faPatreon } from '@fortawesome/free-brands-svg-icons/faPatreon';

function setupIcons() {
  library.add(
    faBook,
    faCog,
    faAngleLeft,
    faAngleRight,
    faArrowLeft,
    faArrowRight,
    faArrowUp,
    faFlag,
    faWindowMaximize,
    faDatabase,
    faDownload,
    faComments,
    faHome,
    faMoon,
    faEye,
    faEyeSlash,
    faExclamationCircle,
    faTasks,
    faTimes,
    faThList,
    faPen,
    faPlus,
    faRss,
    faSave,
    faSun,
    faFilePdf,
    faFileArchive,
    faClock
  );
  library.add(faDiscord, faPatreon);
}

export default setupIcons;
