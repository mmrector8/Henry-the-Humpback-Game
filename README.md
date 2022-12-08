# Henry-the-Humpback-Game
[Henry, the Humpback Whale Game](https://mmrector8.github.io/Henry-the-Humpback-Game/)

## Background:

Henry the Humpback is a game about Humpback Whales in Monterey Bay. As a player, you will be a juvenile humpback whale named Henry, and learn about Humpback Whales along the way! Your goal help Henry navigate his surroundings and eat 3000 lbs of krill to prepare for his migration south. You need to avoid obstacles, you will lose health points if you hit them. Eat 3000 lbs of krill before you run out of health points.

As the game progresses and Henry eats, he will grow in size, thus making it more difficult for him to navigate his surroundings. 


**Here are the general rules:**
***
* You control Henry the humpback using your keyboard. 
* Use the left arrow to move horizontally, the up arrow to move vertically, and the down arrow to move down the water column.
* You need to eat 3,000 lbs of krill. Humpbacks can eat up to 3,000 lbs of food a day and feed throughout the summer and fall in Monterey!
* Make sure you avoid any trash- Humpbacks like to eat krill, not plastic!
* Avoid ships and other obstacles as well!
* If you run into obstacles you will lose health points. If you hit 0 health points, you lose the game!
 
## Functionality & MVPs 

**In Henry the Humpback, users will be able to:**

1. Navigate through the underwater scene using your keyboard
2. Pause the game
3. Hunt for food and eat it
4. Track how much food you have eaten so far
5. Avoid obstacles in your path!
6. Learn about humpback whales and their migration, food, and threats.


In addition, this project will include:

1. An “about” modal describing the background and rules of the game
2. A production README
 
## Technologies, Libraries, APIs

The project will be implemented with the following technologies:

The Canvas API to render the game animation
Webpack to bundle and transpile the JavaScript code
Npm to manage the dependencies of the project

## Technical Implementation 

**Character Animation**
  Each character is animated through Sprite sheets and custom animation functions. See example for the crab animation below: 

  ```javascript
      animate() {
        this.ctx.drawImage(crab, (this.frameX * this.width), this.height, this.width, this.height, this.x, this.y, this.width/2, this.height/2);
        if (this.incrementer % 10 === 0) {
            if (this.frameX < 6) {
                this.frameX++;
            } if (this.frameX === 6) {
                this.frameX = 0;
            }
        }
        this.incrementer++
    }
    updateCrab(){
        this.x += 3;
    }
  ```

**Collision Detection**
Collisions are detected between Henry and other objects via tracking the x and y coordinates of both objects and their heights and widths. Collisions are only recorded once by changing their name to uppercase once they have been added to the collision array.

```javascript
      collisionWithObject() {
        for (let i = 0; i < CURRENT_OBSTACLES.length; i++) {

            if (CURRENT_OBSTACLES[i].x < 700 && this.henry.x < 700) {
                if ((CURRENT_OBSTACLES[i].y + (CURRENT_OBSTACLES[i].height / CURRENT_OBSTACLES[i].divisor)) >= this.henry.y
                    && CURRENT_OBSTACLES[i].y <= this.henry.y + (this.henry.henryHeight / this.henry.divisor)
                    && (this.henry.x + (this.henry.henryWidth / this.henry.divisor)) >= CURRENT_OBSTACLES[i].x
                    && this.henry.x <= CURRENT_OBSTACLES[i].x + (CURRENT_OBSTACLES[i].width / CURRENT_OBSTACLES[i].divisor)
                    && CURRENT_OBSTACLES[i].name !== CURRENT_OBSTACLES[i].name.toUpperCase()) {
                    CURRENT_OBSTACLES[i].name = CURRENT_OBSTACLES[i].name.toUpperCase();
                    this.collisions.push(CURRENT_OBSTACLES[i])
                }
            }

        }
        return false;
    }
```
## Future Features to Add:
* Add extra snippets about humpback whales
* Implement a 1 second loss of control of keyboard when you collide
* Add more variation in underwater animation

## Animation Drawing Credits:
* Krill Photo: https://www.freepik.com/free-vector/arctic-food-chain-pyramid_9742089.htm#query=krill&position=6&from_view=search&track=sph

* Humpback Whale Photo: https://www.freepik.com/free-vector/set-humpback-whale-cartoon-white-background_27538974.htm#query=humpback%20whale&position=2&from_view=search&track=sph

* Submarine Photo: https://www.freepik.com/premium-vector/cute-submarine-cartoon-submarine-clipart-vector-illustration_16703159.htm
