 # TourGuide 🖼️    ( OpenSourced for Hacktoberfest 2023 )
**Star ⭐ the repository if you liked it!**

 A simple application made using HTML, CSS, JavaScript.


## How you can Contribute?

There is always something to contribute for everyone. In this project, you can add your favourite place to visit as a card to the website! 
Or maybe you don't like the line that you are reading right now and want to change it! Well, why not?

We appreciate all kinds of contributions from core-code contributions to non-code contributions like fixing the site, suggesting a feature, raising an issue, etc.


## How to Contribute?

Contributing to TourGuide is a cake-walk as long as you follow the steps below 😉

1. Choose a destination whose card you want to contribute, make sure it's not there on the site yet 
2. `Fork` the repository
3. Download that place's image and upload it to the `images` folder. Make sure you provide a valid name to your image file
4. Copy the Card template code given below & fill in the information as directed
   >  Note: Copy & paste the entire code as it is after filling the details of the character! 
   > 🙅‍♂️Atmost 3 cards in a row .Create a new row if you want to add more🙅‍♀️
   ``` html
       <div class="image">
          <img src="images/[Your Image]" alt="">
             <div class="details">
                <h2>[Final Destination's Name] <span>[City or State Name]</span></h2>
                <p>[Add some Info aout the place not more than 30 words] </p>
                 <div class="more">
                    <a href="[add a link which have more details about the place]" class="read-more">Read <span>More</span></a>
                    <a href="[add a link directing to its location]" class="read-more">See <span>Location</span></a>
                  </div>
             </div>
       </div>
    ```

5. Paste the edited template code into the `index.html` file just below the last added card !
6. Please notice if three images are already added in a row create a row class and add into that 
   ``` html
      <!--image row start-->
      <div class="row">
           [Add your card here then ]
       </div>
      <!--image row end-->
   ```
7. Each row div contains 3 image cards.
8. `Sync` your Fork & then create a `Pull Request`. If there are any conflicts with the main branch then resolve them first.
    ``` sh
    title: Name of the place added
    description: Issue no: #[Issue no here] (for adding a new place its #4)
    ```
 That's it, you have successfully contributed to tourGuide. Your Place will appear on the site within minutes of your PR getting merged <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/partying-face_1f973.png" height="20"/>


# OUR AMAZING CONTRIBUTORS <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/man-technologist_1f468-200d-1f4bb.png" height="40"/>
<a href="https://github.com/harshvardhansb/TourGuide/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=harshvardhansb/TourGuide" />
</a>
<br/>


<br><br>
<div align="center">
Maintained with ♥️ <a href="https://github.com/harshvardhansb">Harsh Vardhan</a>
</div>
