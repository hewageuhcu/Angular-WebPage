import { input } from "@angular/core"

<div>
<p #channelName> Chathurya </p>
<input type="text" #myInput ngModel>
<button [disabled]="myInput.value.length===0"(click)="sendInput(myInput,channelName")Click</button>
</div>
