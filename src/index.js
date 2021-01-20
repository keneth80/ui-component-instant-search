// Import stylesheets
import './style.css';
import { InstantSearch } from './solution/presenter/instant-search';
import { retrieveWordList } from './solution/presenter/instant-search/mock/word';


const bootstrap = () => {
    // instant search setup
    const instantSearch = new InstantSearch({
        selector: '#instant-search',
        css: 'instant-search-input',
        placeholder: 'please enter keyword',
        changeEvent: (eventText) => {
            // 해당 단어에 맞는 데이터를 출력
            getData(eventText);
        }
    });

    // 최초에 전체 리스트를 출력.
    getData();
}

const displayWordList = (selector, data) => {
    let itemList = '';
    for (let i = 0; i < data.length; i++) {
        itemList += `
        <div>
            <span>${data[i].word}</span>
        </div>`
    }
    selector.innerHTML = itemList;
}

const getData = (targetWord = '') => {
    // q4. Promise를 사용하여 검색 키워드에 맞는 데이터를 가져와 리스트를 출력하시오.
    // TODO: Write JS code here!'
    retrieveWordList(targetWord)
        .then((result) => {
            displayWordList(document.querySelector('#wordlist'), result);
        });
}

bootstrap();
