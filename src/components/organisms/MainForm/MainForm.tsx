import React from 'react';
import MainTopPanel from "../../molecules/MainTopPanel/MainTopPanel";
import ListViewPolls from "../../molecules/ListView/ListViewPolls/ListViewPolls";
const MainForm = () => {
    return (
        <div>
            <MainTopPanel/>
            <ListViewPolls theme='cdmslmcdlsd;,c;s' date='12.03.24' count={900} percent={93}/>
            <ListViewPolls theme='cdmslmcdlsd;,c;s' date='12.03.24' count={900} percent={93}/>
            <ListViewPolls theme='cdmslmcdlsd;,c;s' date='12.03.24' count={900} percent={93}/>
            <ListViewPolls theme='cdmslmcdlsd;,c;s' date='12.03.24' count={900} percent={93}/>
        </div>
    );
};

export default MainForm;