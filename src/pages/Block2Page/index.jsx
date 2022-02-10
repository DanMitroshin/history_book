import React from 'react';
import Content from "../../components/Content";
import styles from "./styles.module.scss";
import {MAIN_URL} from "../../constants";


function Block2Page() {

    return <Content next={MAIN_URL.BLOCK_3}>
        <h1>Мега История</h1>
        <h2>Блок №2 - Система</h2>
        <br/>
        <p><b>Итак, погнали. </b>
            Просто посмотри на эту дату и фразу - позже мы к ним вернемся: <i>16.06.1921 и “фотосъёмка студента”</i>.
        </p>

        <p>
            Сделаем простой алфавит, состоящий из пар, составленных из десяти цифр и букв.
            Выучить такой алфавит нетрудно, даже применяя механическую память, но делать это вовсе не обязательно.
            Мы ведь хотим избавиться от топорного заучивания.
            Для каждой пары есть подсказка.
            <b>Если ты сосредоточишься, то запомнишь весь список после первого же прочтения.</b>
        </p>

        <p>
            Для нас существуют десять цифр: 1, 2, 3, 4, 5, 6, 7, 8, 9 и 0.
            И есть также десять согласных - по одной букве на цифру.
        </p>
        <p>
            Таким образом,надо заучить всего десять таких пар – это и есть фонетический алфавит.
            Выучи его, и сможешь пользоваться им всю оставшуюся жизнь.
            <b>Это окажется полезным для тебя с самых неожиданных сторон, о чём ты скоро и узнаешь.</b>
        </p>

        <ol className={styles.bullet}>
            <li>
                <b>Цифра 1 всегда будет означать букву «т»</b>, а ей, в свою очередь, всегда будет соответствовать цифра 1.
                Подсказка для запоминания, которая скоро станет тебе совсем не нужна:
                печатная буква «т» содержит одну вертикальную черту.
                Подумай об этом одну секунду и запомнишь, что «т = 1».
            </li>
            <li>
                <b>Цифра 2 будет представлена буквой «н».</b>
                Запомним это так: буква «н» содержит две вертикальные черты.
                Снова задумайся об этом на одну секунду.
            </li>
            <li>
                <b>Цифра 3 будет буквой «ш». 3 = ш и ш = 3.</b>
                Буква «ш» содержит три вертикальные черты - это поможет прочно запомнить данную пару.
            </li>
            <li>
                <b>Цифра 4 представлена у нас буквой «ч».</b>
                Слово «четыре» начинается звуком «ч», и, кроме того,
                написание «ч» практически не отличается от написания цифры 4. Тут легко запомнить. Потрать еще одну секундочку на обдумывание.
            </li>
            <li>
                <b>Цифра 5 - это буква «п».</b>
                Подсказка для запоминания: слово «пять» начинается звуком «п». 5 = п и п = 5 тоже.
            </li>
            <li>
                <b>Цифра 6 будет для нас буквой «с».</b>
                Здесь сразу 2 подсказки (кстати, какую букву обозначает цифра 2?).
                Первая - начертание «с» напоминает незаконченное написание цифры 6.
                И вторая - 6 на английским языке (six) начинается буквой «с».
                На секундочку: с = 6.
            </li>
            <li>
                <b>Цифра 7 - это буква «г».</b>
                Как запомнить: буква «г» – зеркальное отражение цифры 7.
            </li>
            <li>
                <b>Цифра 8 равна букве «в».</b>
                Первая подсказка - буква «в» очень похожа на число 8, а вторая - слово «восемь» начинается буквой «в».
            </li>
            <li>
                <b>Цифра 9 будет буквой «д».</b>
                Подсказка для запоминания: слово «девять» начинается буквой «д». 9 = д и д = 9, точно.
            </li>
            <li>
                <b>И наконец, цифра 0 будет представлена буквой «к».</b>
                Так как «к» - первая буква слова «круг».
            </li>
        </ol>

        <div className={styles.author}/>
        <p>
            Если ты внимательно прочитал весь список,
            то уже запомнил буквенные обозначения цифр или, по крайней мере, большую их часть.
            Но в любом случае давай коротко повторим то, что уже знаем.
        </p>

        <ol className={styles.bullet}>
            <li>
                <b>1 = т.</b> <br/> У буквы «т» одна вертикальная черта.
            </li>
            <li>
                <b>2 = н.</b><br/> У буквы «н» две вертикальные черты.
            </li>
            <li>
                <b>3 = ш.</b><br/> У буквы «ш» три вертикальные черты.
            </li>
            <li>
                <b>4 = ч.</b><br/> Слово «четыре» начинается буквой «ч», и «ч» просто похожа на 4.
            </li>
            <li>
                <b>5 = п.</b><br/> Слово «пять» начинается буквой «п».
            </li>
            <li>
                <b>6 = с.</b><br/> Буква «с» напоминает незавершенное написание цифры 6. И 6 на английским языке (six) начинается с «с».
            </li>
            <li>
                <b>7 = г.</b><br/> Вид буквы «г» – зеркальное отражение цифры 7.
            </li>
            <li>
                <b>8 = в.</b><br/> Буква «в» напоминает по написанию цифру 8, а ещё слово «восемь» начинается буквой «в».
            </li>
            <li>
                <b>9 = д.</b><br/> Слово «девять» начинается буквой «д».
            </li>
            <li>
                <b>0 = к.</b><br/> Цифра 0 напоминает круг, а это слово начинается буквой «к».
            </li>
        </ol>

        <br/>
        <p>
            Всё, теперь ты знаешь наш алфавит!
            Давай рассмотрим <b>главное правило его использования</b>.
            Для тебя играют роль только то 10 букв, которые мы выше связали с числами.
            Остальные буквы не обозначают вообще ничего.
        </p>

        <p>
            <b>Этот алфавит надо запомнить до автоматизма</b>, то есть, услышав «п»,
            тебе надо сразу подумать: «пять!».
            Увидев или услышав «ноль», ты моментально вспоминаешь про «к».
            Эти соответствия должны возникать мгновенно,
            причем не в алфавитном или числовом порядке.
            Попытайся представить их себе - скорее всего, они уже в твоей голове!
            Только не продолжай чтение, пока не выучишь назубок все десять пар
            и не попрактикуешься в переводе цифр в буквы и наоборот.
        </p>

        <div className={styles.author}/>
        <p>
        Супер. А теперь задание.
        Сможешь ли без подглядывания вспомнить ту дату,
        которую я написал в самом начале этого раздела?
        </p>

        <p>
            Я полагаю, что нет, я ведь не просил тебя её выучить.
            А как насчёт фразы после этой даты? Наверняка она запомнилась тебе гораздо лучше.
        </p>

        <p>
            Давай разберём её подробнее: <i>фотосъёмка студента</i>.
            Применим к ней наш алфавит и получим число.
            Первые две буквы «ф» и «о» не означают ничего, а вот после них идёт буква «т» - она даёт цифру 1.
            Далее ищем значащую букву и находим: после «о» как раз идёт «с», что даёт нам цифру 6.
        </p>
        <p>
            Разбери так всю фразу целиком и получишь число 16061921.
            Мы уже знаем, что тут должна быть дата, поэтому расставим точки и получим <i>“16.06.1921”</i>.
            Ну вот, а думаешь, что дата не запомнилась.
        </p>
        <p>
            Думаю, основная идея тебя уже зацепила!
            Осмысленные фразы запомнить гораздо проще, чем абстрактные наборы цифр.
            Ещё пример: <i>“академик осмотрел сигнализацию”</i>.
            Переводим в число - 09061672, а его - в дату <i>09.06.1672</i>.
            Получили день рождения Петра I.
            И нам гораздо проще связать Петра I с фразой про академика, чем с набором цифр.
        </p>

        <p>
            <b>Блок закончен. Ты молодец! Переходи дальше.</b>
        </p>

    </Content>
}

export default Block2Page;