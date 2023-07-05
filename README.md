# Super Star Racing

Super Star Racing is a racing game project built to showcase React functionality, particularly useState and useEffect. The project is a game that allows users to pit two vehicles against each other that will race to the right side of the screen where the finish line awaits. After the game finishes, the user will be told the result of the race and will be prompted to play the game again or simply close the result screen window. 

## Built With 
  * HTML
  * CSS
  * JavaScript
  * React via Create-React-App
  * Framer-motion Animation library

## Vehicle Select 
![image](https://github.com/fletchcoder/Super-Star-Racing/assets/131314453/5a7151b6-2f08-4d9d-bd03-147c91804cbf)
![image](https://github.com/fletchcoder/Super-Star-Racing/assets/131314453/ddfab24a-26bb-4607-886a-e1a26482ffd1)
<img src="https://github.com/fletchcoder/Super-Star-Racing/assets/131314453/dd4ec1ff-b224-4003-af7d-df4bc5f41067" width="100%">

On the vehicle select screen, the user will choose both their vehicle and their opponent's vehicle. There are a total of 16 different vehicles with different speeds. Use the arrows at the top of the selection window to navigate between the pages of vehicles. Hovering over the vehicle will tell you the name of the vehicle, and on smaller resolution screens a brief description of the vehicle will display instead. 

## Welcome to Super Star Racing 
![image](https://github.com/fletchcoder/Super-Star-Racing/assets/131314453/86a1d6d0-05f3-43bd-abe7-92724458125c)

After selecting both vehicles, this is the screen that the user is greeted with. The window provides the user with a brief description of how the game works and leaves a button at the bottom to prompt the user to begin the race. Upon clicking "Go" the game will start by switching to a timer that counts down from 3 seconds. Once the timer reaches 0, it will display "Go!" and then the window and overlay will disappear and the race will begin. 

## The Race 
![image](https://github.com/fletchcoder/Super-Star-Racing/assets/131314453/7e6c1314-5d00-4e5d-b254-5d8182c2b312)

The user's car will be on top, while the opponent's car will be on bottom. Both vehicles will move across the screen based on the speed that each is programmed with, completing the tween animation from the framer-motion library in the process. The race is over once the first vehicle crosses the finish line and triggers the next screen. 

## The Result 
![image](https://github.com/fletchcoder/Super-Star-Racing/assets/131314453/2bd22f7b-b2a2-4fa5-8eb8-b384e0234c0e)

Now that the race is over, the overlay and dialogue window will pop up once again. The result of the race is displayed in the window, as well as buttons labeled "Play Again" and "Close". If the top vehicle crossed the line first, then the result will say "You win!" because that is the vehicle that represents the user. If the bottom vehicle crossed the line first, then the result will say "You lose!". If the speed of the vehicles is the same, then the result will say "It's a tie!". Clicking "Play Again" will refresh the window and allow the game to be played again and clicking "Close" will simply close the result window and overlay, leaving the vehicles at the finish line.






