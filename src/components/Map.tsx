import { useEffect } from "react";

export const Map = () => {
    
    var colourMapping = [
        "#0dd43e",
        "#a19210",
        "#a16010",
        "#a14010",
        "#a11a10",
        "#10a169",
        "#109ca1",
        "#107aa1",
        "#1051a1",
        "#1015a1",
        "#5110a1",
        "#7610a1",
        "#9010a1",
        "#a11067",
        "#a11045",
        "#2fa110",
    ]

    useEffect(() => { 
        for (let i = 1; i <= 16; i++) {
            const element = document.getElementById(`i${i}`);
            if (element) {
                element.getElementsByTagName('path')[0].style.fill = colourMapping[i-1];
            }
            
            const portals: Element[] =  Array.from(document.getElementsByClassName(`p${i}`));
            portals.forEach(element => (element as HTMLElement).style.fill = colourMapping[i-1]);
        }
    });

    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000pt" height="1000pt">

        <g id="i16">
            <path d=" M 374 299 L 411 302 L 405 344 L 421 369 L 466 387 L 466 431 L 430 449 L 418 475 L 385 475 L 377 445 L 345 408 L 301 408 L 301 382 L 321 360 L 353 354 L 371 339 L 374 299 Z " />
            <circle className="p12" cx="391.5" cy="317.5" r="15.5" />
            <circle className="p6" cx="402" cy="459.5" r="15.5" />
            <circle className="p4" cx="316.5" cy="387.5" r="15.5" />
            <circle className="p3" cx="450.5" cy="409.5" r="15.5" />
        </g>

        <g id="i15">
            <path d=" M 568 312 L 605 325 L 607 369 L 624 387 L 659 397 L 659 440 L 632 440 L 596 426 L 556 445 L 487 445 L 487 408 L 507 382 L 568 312 Z " />
            <circle className="p11" cx="638.5" cy="420.5" r="15.5" />
            <circle className="p1" cx="502.5" cy="420.5" r="15.5" />
        </g>

        <g id="i14">
            <path d=" M 493 576 L 517 578 L 527 567 L 537 550 L 568 541 L 575 490 L 607 490 L 619 507 L 614 550 L 624 567 L 659 571 L 654 623 L 640 627 L 619 616 L 589 635 L 578 663 L 542 666 L 542 632 L 524 616 L 493 616 L 493 576 Z " />
            <circle className="p16" cx="508.5" cy="593.5" r="15.5" />
            <circle className="p6" cx="591.5" cy="505.5" r="15.5" />
            <circle className="p8" cx="560.5" cy="650.5" r="15.5" />
            <circle className="p3" cx="638.5" cy="600" r="15.5" />
        </g>

        <g id="i13">
            <path d=" M 321 588 L 377 528 L 418 495 L 455 495 L 472 521 L 478 567 L 478 627 L 411 632 L 394 605 L 385 588 L 364 592 L 358 602 L 381 632 L 381 653 L 332 656 L 321 588 Z " />
            <circle className="p12" cx="345" cy="640.5" r="15.5" />
            <circle className="p9" cx="462.5" cy="609.5" r="15.5" />
            <circle className="p8" cx="433" cy="513" r="15.5" />
        </g>

        <g id="i12">
            <path d=" M 171 690 L 219 690 L 222 733 L 260 781 L 260 790 L 242 809 L 238 853 L 199 853 L 187 842 L 187 798 L 161 766 L 161 725 L 171 690 Z " />
            <circle className="p15" cx="210.5" cy="837.5" r="15.5" />
            <circle className="p1" cx="188" cy="705.5" r="15.5" />
        </g>

        <g id="i11">
            <path d=" M 176 513 L 205 513 L 205 550 L 238 564 L 242 610 L 211 627 L 211 656 L 171 656 L 176 620 L 147 602 L 103 605 L 103 559 L 161 554 L 176 513 Z " />
            <circle className="p15" cx="188" cy="528.5" r="15.5" />
            <circle className="p3" cx="118.5" cy="584.5" r="15.5" />
            <circle className="p2" cx="195" cy="640.5" r="15.5" />
        </g>

        <g id="i10">
            <path d=" M 161 311 L 211 312 L 211 349 L 246 397 L 235 415 L 238 440 L 238 463 L 211 471 L 192 458 L 199 415 L 176 392 L 161 354 L 161 311 Z " />
            <circle className="p13" cx="188" cy="326.5" r="15.5" />
            <circle className="p5" cx="216.5" cy="451.5" r="15.5" />
        </g>

        <g id="i9">
            <path d=" M 195 109 L 183 166 L 167 187 L 106 190 L 103 239 L 154 237 L 176 255 L 176 281 L 232 285 L 235 245 L 228 232 L 238 171 L 242 112 L 195 109 Z " />
            <circle className="p14" cx="131.5" cy="212.5" r="15.5" />
            <circle className="p14" cx="203.5" cy="265.5" r="15.5" />
            <circle className="p5" cx="216.5" cy="128.5" r="15.5" />
        </g>
        
        <g id="island9">
            <path d=" M 335 112 L 381 109 L 381 151 L 399 168 L 399 187 L 418 204 L 418 281 L 364 281 L 340 208 L 321 195 L 321 171 L 340 159 L 335 135 L 335 112 Z " fill="rgb(176,165,138)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
            <mask id="_mask_EZKFP5Lj1XsJyzHDzJ43mMIyCNnPZJLm">
            <circle vector-effect="non-scaling-stroke" cx="391.5" cy="265.5" r="15.5" fill="white" stroke="none" />
            </mask>
            <circle vector-effect="non-scaling-stroke" cx="391.5" cy="265.5" r="15.5" fill="rgb(217,58,58)" />
            <circle vector-effect="non-scaling-stroke" cx="391.5" cy="265.5" r="15.5" fill="rgb(217,58,58)" mask="url(#_mask_EZKFP5Lj1XsJyzHDzJ43mMIyCNnPZJLm)" stroke-width="6" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
            <mask id="_mask_R8KWaYVKGi1D4gswMfob26SGV7PI4dI0">
            <circle vector-effect="non-scaling-stroke" cx="360.5" cy="128.5" r="15.5" fill="white" stroke="none" />
            </mask>
            <circle vector-effect="non-scaling-stroke" cx="360.5" cy="128.5" r="15.5" fill="rgb(217,58,58)" />
            <circle vector-effect="non-scaling-stroke" cx="360.5" cy="128.5" r="15.5" fill="rgb(217,58,58)" mask="url(#_mask_R8KWaYVKGi1D4gswMfob26SGV7PI4dI0)" stroke-width="6" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
        </g>
        <g id="island10">
            <path d=" M 487 178 L 513 184 L 537 157 L 542 102 L 584 102 L 589 184 L 654 180 L 659 222 L 624 222 L 596 245 L 542 226 L 532 234 L 484 232 L 487 178 Z " fill="rgb(176,165,138)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
            <mask id="_mask_E1mFVdJLZFHZeDLEvoP7pxwBvs60rN7y">
            <circle vector-effect="non-scaling-stroke" cx="564" cy="124.49999999999994" r="15.5" fill="white" stroke="none" />
            </mask>
            <circle vector-effect="non-scaling-stroke" cx="564" cy="124.49999999999994" r="15.5" fill="rgb(217,58,58)" />
            <circle vector-effect="non-scaling-stroke" cx="564" cy="124.49999999999994" r="15.5" fill="rgb(217,58,58)" mask="url(#_mask_E1mFVdJLZFHZeDLEvoP7pxwBvs60rN7y)" stroke-width="6" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
            <mask id="_mask_Ho2FJd2eZkVJaQCaSdDtBTAmwRgrAQzM">
            <circle vector-effect="non-scaling-stroke" cx="638.5" cy="205.49999999999997" r="15.5" fill="white" stroke="none" />
            </mask>
            <circle vector-effect="non-scaling-stroke" cx="638.5" cy="205.49999999999997" r="15.5" fill="rgb(217,58,58)" />
            <circle vector-effect="non-scaling-stroke" cx="638.5" cy="205.49999999999997" r="15.5" fill="rgb(217,58,58)" mask="url(#_mask_Ho2FJd2eZkVJaQCaSdDtBTAmwRgrAQzM)" stroke-width="6" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
            <mask id="_mask_2M0W3RyKnzllsR8fNgXxLt4LGFu6tU5z">
            <circle vector-effect="non-scaling-stroke" cx="502.5" cy="210.49999999999997" r="15.5" fill="white" stroke="none" />
            </mask>
            <circle vector-effect="non-scaling-stroke" cx="502.5" cy="210.49999999999997" r="15.5" fill="rgb(217,58,58)" />
            <circle vector-effect="non-scaling-stroke" cx="502.5" cy="210.49999999999997" r="15.5" fill="rgb(217,58,58)" mask="url(#_mask_2M0W3RyKnzllsR8fNgXxLt4LGFu6tU5z)" stroke-width="6" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
        </g>
        <g id="island11">
            <path d=" M 864 154 L 866 119 L 820 102 L 761 109 L 735 119 L 716 166 L 693 184 L 695 248 L 726 278 L 769 278 L 759 259 L 776 239 L 798 245 L 801 265 L 823 269 L 871 269 L 871 222 L 847 210 L 829 178 L 806 178 L 788 195 L 756 199 L 726 217 L 726 204 L 735 192 L 761 187 L 783 174 L 801 154 L 820 147 L 843 157 L 864 154 Z " fill="rgb(176,165,138)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
            <mask id="_mask_LiTvq1pO43QrHOw6FpPQm0Nk0RXKuqUW">
            <circle vector-effect="non-scaling-stroke" cx="845.5" cy="134.49999999999997" r="15.5" fill="white" stroke="none" />
            </mask>
            <circle vector-effect="non-scaling-stroke" cx="845.5" cy="134.49999999999997" r="15.5" fill="rgb(217,58,58)" />
            <circle vector-effect="non-scaling-stroke" cx="845.5" cy="134.49999999999997" r="15.5" fill="rgb(217,58,58)" mask="url(#_mask_LiTvq1pO43QrHOw6FpPQm0Nk0RXKuqUW)" stroke-width="6" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
            <mask id="_mask_uRFooLai1Rj73q7pgC0HK83OOlnLHJvB">
            <circle vector-effect="non-scaling-stroke" cx="855.5" cy="250.00000000000003" r="15.5" fill="white" stroke="none" />
            </mask>
            <circle vector-effect="non-scaling-stroke" cx="855.5" cy="250.00000000000003" r="15.5" fill="rgb(217,58,58)" />
            <circle vector-effect="non-scaling-stroke" cx="855.5" cy="250.00000000000003" r="15.5" fill="rgb(217,58,58)" mask="url(#_mask_uRFooLai1Rj73q7pgC0HK83OOlnLHJvB)" stroke-width="6" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
        </g>
        <g id="island12">
            <path d=" M 685 349 L 720 332 L 761 332 L 773 302 L 798 299 L 812 344 L 829 360 L 829 408 L 806 436 L 788 422 L 794 387 L 780 422 L 745 436 L 735 445 L 705 445 L 685 401 L 685 349 Z " fill="rgb(176,165,138)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
            <mask id="_mask_L0Sgqu7uCtDf6XaqvxxSorFVf7RUf5Ge">
            <circle vector-effect="non-scaling-stroke" cx="784.5" cy="317.5" r="15.5" fill="white" stroke="none" />
            </mask>
            <circle vector-effect="non-scaling-stroke" cx="784.5" cy="317.5" r="15.5" fill="rgb(217,58,58)" />
            <circle vector-effect="non-scaling-stroke" cx="784.5" cy="317.5" r="15.5" fill="rgb(217,58,58)" mask="url(#_mask_L0Sgqu7uCtDf6XaqvxxSorFVf7RUf5Ge)" stroke-width="6" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
            <mask id="_mask_WAvxDeOH7uaHYJ5QveKbH3alE4ALfD48">
            <circle vector-effect="non-scaling-stroke" cx="700.5" cy="378.5" r="15.5" fill="white" stroke="none" />
            </mask>
            <circle vector-effect="non-scaling-stroke" cx="700.5" cy="378.5" r="15.5" fill="rgb(217,58,58)" />
            <circle vector-effect="non-scaling-stroke" cx="700.5" cy="378.5" r="15.5" fill="rgb(217,58,58)" mask="url(#_mask_WAvxDeOH7uaHYJ5QveKbH3alE4ALfD48)" stroke-width="6" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
        </g>
        <g id="island13">
            <path d=" M 738 498 L 765 487 L 801 528 L 839 531 L 839 581 L 812 596 L 812 610 L 839 588 L 843 635 L 809 666 L 769 666 L 726 647 L 726 550 L 738 498 Z " fill="rgb(176,165,138)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
            <mask id="_mask_v0qq9gfwnD78bx7oE4hwggkNBN4yLgRb">
            <circle vector-effect="non-scaling-stroke" cx="762.5" cy="513" r="15.5" fill="white" stroke="none" />
            </mask>
            <circle vector-effect="non-scaling-stroke" cx="762.5" cy="513" r="15.5" fill="rgb(217,58,58)" />
            <circle vector-effect="non-scaling-stroke" cx="762.5" cy="513" r="15.5" fill="rgb(217,58,58)" mask="url(#_mask_v0qq9gfwnD78bx7oE4hwggkNBN4yLgRb)" stroke-width="6" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
            <mask id="_mask_wcnUVM8WYlVaNGWJcb7vSFE5WaIzT7Qu">
            <circle vector-effect="non-scaling-stroke" cx="778" cy="650.5" r="15.5" fill="white" stroke="none" />
            </mask>
            <circle vector-effect="non-scaling-stroke" cx="778" cy="650.5" r="15.5" fill="rgb(217,58,58)" />
            <circle vector-effect="non-scaling-stroke" cx="778" cy="650.5" r="15.5" fill="rgb(217,58,58)" mask="url(#_mask_wcnUVM8WYlVaNGWJcb7vSFE5WaIzT7Qu)" stroke-width="6" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
        </g>
        <g id="island14">
            <path d=" M 702 794 L 756 756 L 798 690 L 843 684 L 861 725 L 857 809 L 820 816 L 788 809 L 776 845 L 745 858 L 716 845 L 695 813 L 702 794 Z " fill="rgb(176,165,138)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
            <mask id="_mask_pPpwBDMGU0JZ5zpcJd02EitEvJWPMI9Y">
            <circle vector-effect="non-scaling-stroke" cx="747" cy="837.5" r="15.5" fill="white" stroke="none" />
            </mask>
            <circle vector-effect="non-scaling-stroke" cx="747" cy="837.5" r="15.5" fill="rgb(217,58,58)" />
            <circle vector-effect="non-scaling-stroke" cx="747" cy="837.5" r="15.5" fill="rgb(217,58,58)" mask="url(#_mask_pPpwBDMGU0JZ5zpcJd02EitEvJWPMI9Y)" stroke-width="6" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
            <mask id="_mask_pru2pU7KyoBzxe8FqjnOEQakGtJ4li1G">
            <circle vector-effect="non-scaling-stroke" cx="824.5" cy="705.5" r="15.5" fill="white" stroke="none" />
            </mask>
            <circle vector-effect="non-scaling-stroke" cx="824.5" cy="705.5" r="15.5" fill="rgb(217,58,58)" />
            <circle vector-effect="non-scaling-stroke" cx="824.5" cy="705.5" r="15.5" fill="rgb(217,58,58)" mask="url(#_mask_pru2pU7KyoBzxe8FqjnOEQakGtJ4li1G)" stroke-width="6" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
        </g>
        <g id="island15">
            <path d=" M 493 774 L 537 739 L 547 690 L 584 690 L 600 722 L 647 722 L 666 748 L 654 766 L 654 778 L 607 785 L 575 774 L 572 790 L 537 805 L 524 827 L 499 827 L 493 774 Z " fill="rgb(176,165,138)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
            <mask id="_mask_BE38bZyFh4qzBUSrN7jFDPnTvczqV4Lg">
            <circle vector-effect="non-scaling-stroke" cx="643.5" cy="743" r="15.5" fill="white" stroke="none" />
            </mask>
            <circle vector-effect="non-scaling-stroke" cx="643.5" cy="743" r="15.5" fill="rgb(217,58,58)" />
            <circle vector-effect="non-scaling-stroke" cx="643.5" cy="743" r="15.5" fill="rgb(217,58,58)" mask="url(#_mask_BE38bZyFh4qzBUSrN7jFDPnTvczqV4Lg)" stroke-width="6" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
            <mask id="_mask_AhVl8v89rzQZPRfA72KUnVwcxhJBSHQ1">
            <circle vector-effect="non-scaling-stroke" cx="508.5" cy="786.5" r="15.5" fill="white" stroke="none" />
            </mask>
            <circle vector-effect="non-scaling-stroke" cx="508.5" cy="786.5" r="15.5" fill="rgb(217,58,58)" />
            <circle vector-effect="non-scaling-stroke" cx="508.5" cy="786.5" r="15.5" fill="rgb(217,58,58)" mask="url(#_mask_AhVl8v89rzQZPRfA72KUnVwcxhJBSHQ1)" stroke-width="6" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
            <mask id="_mask_yPNkHyfA7B5DJVZdOuua9xa6d18JHQpo">
            <circle vector-effect="non-scaling-stroke" cx="564" cy="705.5" r="15.5" fill="white" stroke="none" />
            </mask>
            <circle vector-effect="non-scaling-stroke" cx="564" cy="705.5" r="15.5" fill="rgb(217,58,58)" />
            <circle vector-effect="non-scaling-stroke" cx="564" cy="705.5" r="15.5" fill="rgb(217,58,58)" mask="url(#_mask_yPNkHyfA7B5DJVZdOuua9xa6d18JHQpo)" stroke-width="6" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
        </g>
        <g id="island16">
            <path d=" M 301 725 L 358 722 L 385 700 L 424 700 L 450 733 L 424 766 L 450 781 L 472 781 L 472 823 L 415 827 L 389 858 L 340 858 L 335 827 L 364 809 L 358 769 L 304 763 L 301 725 Z " fill="rgb(176,165,138)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
            <mask id="_mask_OjkFcpx2hD5uLcdYCmHjSMCwvl0y70mB">
            <circle vector-effect="non-scaling-stroke" cx="321" cy="743" r="15.5" fill="white" stroke="none" />
            </mask>
            <circle vector-effect="non-scaling-stroke" cx="321" cy="743" r="15.5" fill="rgb(217,58,58)" />
            <circle vector-effect="non-scaling-stroke" cx="321" cy="743" r="15.5" fill="rgb(217,58,58)" mask="url(#_mask_OjkFcpx2hD5uLcdYCmHjSMCwvl0y70mB)" stroke-width="6" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
            <mask id="_mask_1WKq6ttLD8oZNlIbEvsQdRoBPrg04avT">
            <circle vector-effect="non-scaling-stroke" cx="456.5" cy="794.5" r="15.5" fill="white" stroke="none" />
            </mask>
            <circle vector-effect="non-scaling-stroke" cx="456.5" cy="794.5" r="15.5" fill="rgb(217,58,58)" />
            <circle vector-effect="non-scaling-stroke" cx="456.5" cy="794.5" r="15.5" fill="rgb(217,58,58)" mask="url(#_mask_1WKq6ttLD8oZNlIbEvsQdRoBPrg04avT)" stroke-width="6" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
            <mask id="_mask_gHh9nH8xDURS397UTf2ogNZk7V8CK6xD">
            <circle vector-effect="non-scaling-stroke" cx="354" cy="842.5" r="15.5" fill="white" stroke="none" />
            </mask>
            <circle vector-effect="non-scaling-stroke" cx="354" cy="842.5" r="15.5" fill="rgb(217,58,58)" />
            <circle vector-effect="non-scaling-stroke" cx="354" cy="842.5" r="15.5" fill="rgb(217,58,58)" mask="url(#_mask_gHh9nH8xDURS397UTf2ogNZk7V8CK6xD)" stroke-width="6" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
        </g>
    </svg>
}