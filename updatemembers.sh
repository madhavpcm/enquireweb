#!/bin/sh
inputfile=$1
rm teams.temp
touch teams.temp

while IFS="," read c1 c2 c3 c4 c5 
do
  echo $c5
  gdown --fuzzy $c5 -O "./assets/members/$c2.png"
  echo '<li class="member">
      <a href="#">
        <img src="./assets/members/'$c2'.png" />
        <span class="member-title">'$c2'</span>
        <span class="member-desig">'$c4'</span>
      </a>
    </li>' >> teams.temp
done < <(tail -n +2 $inputfile)
