// change broder color 
      document.getElementById('add-border').addEventListener('click', function(){
        
           let changeBorder = document.getElementById('friends-container');
           changeBorder.style.border = '3px solid red';
 
     })

     

// change backgroundcolor 
  function addBackgroundColor(){
     const friends =  document.getElementsByClassName('friend');
            for(const friend of friends){
                  friend.style.backgroundColor = 'orange';
            }

     }

//      add friend 

document.getElementById('add-friend').addEventListener('click', function(){
    const container =  document.getElementById('friends-container');
    const friendDiv = document.createElement('div');
            friendDiv.classList.add('friend');
            friendDiv.innerHTML =`
            <h3 class="friend-name">new friend</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea veritatis odit obcaecati quisquam laboriosam earum ut eaque molestiae dolorem officiis.</p>
            `;

            container.appendChild(friendDiv)
    
})




     

  
