import React from 'react';
import { render } from 'react-dom';
import Note from './component/Note';
render(<div>
	     <Note content="测试便签一号" date="2017-5-1"/>
	     <Note content="测试便签二号" date="2017-5-1"/>
	     <Note content="测试便签三号" date="2017-5-1"/>
	     <Note content="测试便签四号" date="2017-5-1"/>
	     <Note content="测试master" date="2017-5-1"/>
       </div>,document.getElementById('app'))