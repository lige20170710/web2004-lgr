 var ul=document.getElementsByClassName('list1')[0];
			console.log(ul)
			var ulList=ul.parentElement.children;
			var list1=document.getElementsByClassName('paging')[0]
			var list2=document.getElementsByClassName('paging1')[0]
			var list3=document.getElementsByClassName('paging2')[0];
			var text=document.getElementsByClassName('text')[0];
			console.log(text.innerHTML)
			for(let i=0;i<ulList.length;i++){
				ulList[i].onclick=function(){
					if(i==0){
						list1.style.display='block';
						list2.style.display='none';
						list3.style.display='none';
						text.innerHTML='公司简介'
					}else if(i==1){
						list1.style.display='none';
						list2.style.display='block';
						list3.style.display='none';
						text.innerHTML='新闻中心'
					}else{
						list1.style.display='none';
						list2.style.display='none';
						list3.style.display='block';
						text.innerHTML='公司历程'
					}
				}
			}