var id;//드래그 하는 요소의 id값 저장하는 변수
var id_list=[];
var overTarget=false;//타겟 위에 드래그 된 요소

function startDrag(){
    id=event.target.id;  //이벤트 발생한 요소의 id 추가
}

function endDrag(){
    if(overTarget){
        var e=document.getElementById(id); //저장된 id를 통해 드래그하는 요소 찾아옴
        document.getElementById('bowl').appendChild(e);//자동으로 이동(찾은 e요소 타겟(div #bowl)으로)
        id_list.push(id);
        console.log(id_list);
        overTarget=false;
    }
}

function overDrag(){
    event.preventDefault();
    overTarget=true;
}

function ondragleave(){
    overTarget=false;
}