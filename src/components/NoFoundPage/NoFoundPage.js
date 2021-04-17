import './NoFoundPage.scss';

import {Page} from "../../common/Page/Page";

export function NoFoundPage() {
    return <Page key={'no-found-page'}>
        {
            params => {
                return <div className='no-found-page'>
                    <h2 className='no-found-page__code'>404</h2>
                    <div>Страница не найдена</div>
                </div>
            }
        }
    </Page>
}