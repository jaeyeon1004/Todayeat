var id;//드래그 하는 요소의 id값 저장하는 변수
var overTarget=false;//타겟 위에 드래그 된 요소

var id_list=[];//드래그 하는 요소 3개의 id값 list
var market_list=['카페베네','행복한맛김','잉꼬떡방아','틈새라면','뜨레봉닭강정','맵당','신사리즉석떡볶이','아저씨닭강정','59떡갈비','고모네정육식당','시장분식','시장탕수육','킹콩부대찌개','원조홍어','백암왕순대&왕냉면'];
var market_rank=new Array(market_list.length).fill(0);//랭킹을 위한 0으로 초기화된 list
var max_rank_index=[];//market list의 요소 중 최댓값의 인덱스들
var result="";

function startDrag(){
    id=event.target.id;  //이벤트 발생한 요소의 id 추가
}

function endDrag(){
    if(overTarget){
        var e=document.getElementById(id); //저장된 id를 통해 드래그하는 요소 찾아옴
        document.getElementById('bowl').appendChild(e);//자동으로 이동(찾은 e요소 타겟(div #bowl)으로)
        id_list.push(id);
        if(id_list.length==3){
            //요소가 3개 drop 완료되면
            console.log(id_list);
            //result를 구하는 함수
            returnResult(id_list);
            //여기에 가능하면 페이지 이동 넣어주면 되지 않을까 싶다          
        }
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

function returnResult(id_list){
    for(i=0;i<id_list.length;i++){
        //요소의 id값에 따라 id_list에 +1하는 활동의 matching()
        matching(id_list[i])
    }
    console.log(market_rank);
    //구한 랭크 중 최댓값 요소의 인덱스들을 구함
    maxIndex(market_rank)
    console.log(max_rank_index);

    //인덱스 수 중 하나를 랜덤으로 -> 랜덤받은 인덱스를 market_list[]
    marketRandom()
    console.log(result);

}

function matching(id){
    switch(id){
        case "oil":
            market_rank[2]+=1
            market_rank[4]+=1
            market_rank[7]+=1
            market_rank[8]+=1
            market_rank[11]+=1
            break;
        case "chicken":
            market_rank[4]+=1
            market_rank[7]+=1
            break;
        case "fishcake":
            market_rank[1]+=1
            market_rank[4]+=1
            market_rank[7]+=1
            break;
        case "salt":
            market_rank[0]+=1
            market_rank[14]+=1
            break;
        case "bone":
            market_rank[8]+=1
            market_rank[9]+=1
            break;
        case "vegetable":
            market_rank[11]+=1
            market_rank[13]+=1
            break;
        case "seasoning":
            market_rank[3]+=1
            market_rank[4]+=1
            market_rank[5]+=1
            market_rank[6]+=1
            market_rank[7]+=1
            market_rank[10]+=1
            market_rank[12]+=1
            market_rank[13]+=1
            break;
        case "noodle":
            market_rank[3]+=2
            break;
        case "ham":
            market_rank[9]+=1
            market_rank[12]+=1
            break;
        case "cellonoodle":
            market_rank[14]+=1
            break;
        case "meat":
            market_rank[9]+=1
            market_rank[11]+=1
            break;
        case "cereal":
            market_rank[2]+=2
            break;
        case "broth":
            market_rank[5]+=1
            market_rank[14]+=1
            break;
        case "tteok":
            market_rank[6]+=1
            market_rank[8]+=1
            market_rank[10]+=1
            break;
        case "beans":
            market_rank[0]+=2
            break;
        case "fish":
            market_rank[13]+=1
            break;
        case "water":
            market_rank[0]+=1
            market_rank[2]+=1
            market_rank[3]+=1
            market_rank[12]+=1
            break;
        case "marineplants":
            market_rank[1]+=2
            break;
    }
}

function maxIndex(market_rank){
    var max_num=Math.max.apply(null,market_rank)
    for(i=0;i<market_rank.length;i++){
        if(market_rank[i]==max_num) max_rank_index.push(i);
    }
}

function marketRandom(){
    var result_index=max_rank_index[Math.floor(Math.random()*max_rank_index.length)];
    result=market_list[result_index];
}