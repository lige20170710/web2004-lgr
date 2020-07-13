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
						list1.style.display='flex';
						list2.style.display='none';
						list3.style.display='none';
						text.innerHTML='卡布奇洛'
					}else if(i==1){
						list1.style.display='none';
						list2.style.display='flex';
						list3.style.display='none';
						text.innerHTML='摩卡咖啡'
					}else{
						list1.style.display='none';
						list2.style.display='none';
						list3.style.display='flex';
						text.innerHTML='拿铁咖啡'
					}
				}
			}