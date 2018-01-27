function time() {
    let clock = document.getElementById("clock");
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let am = text_AP.AM;
    let pm = text_AP.PM;

    let H;
    let M;
    let S;
    let AP;

    if (hours > 12) {
        hours = hours-12;
        AP = pm;
    } else {
        AP = am;
    }



    switch (hours) {
        case 1: H = text_H.h1
            break;
        case 2: H = text_H.h2
            break;
        case 3: H = text_H.h3
            break;
        case 4: H = text_H.h4
            break;
        case 5: H = text_H.h5
            break;
        case 6: H = text_H.h6
            break;
        case 7: H = text_H.h7
            break;
        case 8: H = text_H.h8
            break;
        case 9: H = text_H.h9
            break;
        case 10: H = text_H.h10
            break;
        case 11: H = text_H.h11
            break;
        case 12: H = text_H.h12
            break;
    }

    switch (minutes) {
        case 1: M = text_M.m1
            break;
        case 2: M = text_M.m2
            break;
        case 3: M = text_M.m3
            break;
        case 4: M = text_M.m4
            break;
        case 5: M = text_M.m5
            break;
        case 6: M = text_M.m6
            break;
        case 7: M = text_M.m7
            break;
        case 8: M = text_M.m8
            break;
        case 9: M = text_M.m9
            break;
        case 10: M = text_M.m10
            break;
        case 11: M = text_M.m11
            break;
        case 12: M = text_M.m12
            break;
        case 13: M = text_M.m13
            break;
        case 14: M = text_M.m14
            break;
        case 15: M = text_M.m15
            break;
        case 16: M = text_M.m16
            break;
        case 17: M = text_M.m17
            break;
        case 18: M = text_M.m18
            break;
        case 19: M = text_M.m19
            break;
        case 20: M = text_M.m20
            break;
        case 21: M = text_M.m21
            break;
        case 22: M = text_M.m22
            break;
        case 23: M = text_M.m23
            break;
        case 24: M = text_M.m24
            break;
        case 25: M = text_M.m25
            break;
        case 26: M = text_M.m26
            break;
        case 27: M = text_M.m27
            break;
        case 28: M = text_M.m28
            break;
        case 29: M = text_M.m29
            break;
        case 30: M = text_M.m30
            break;
        case 31: M = text_M.m31
            break;
        case 32: M = text_M.m32
            break;
        case 33: M = text_M.m33
            break;
        case 34: M = text_M.m34
            break;
        case 35: M = text_M.m35
            break;
        case 36: M = text_M.m36
            break;
        case 37: M = text_M.m37
            break;
        case 38: M = text_M.m38
            break;
        case 39: M = text_M.m39
            break;
        case 40: M = text_M.m40
            break;
        case 41: M = text_M.m41
            break;
        case 42: M = text_M.m42
            break;
        case 43: M = text_M.m43
            break;
        case 44: M = text_M.m44
            break;
        case 45: M = text_M.m45
            break;
        case 46: M = text_M.m46
            break;
        case 47: M = text_M.m47
            break;
        case 48: M = text_M.m48
            break;
        case 49: M = text_M.m49
            break;
        case 50: M = text_M.m50
            break;
        case 51: M = text_M.m51
            break;
        case 52: M = text_M.m52
            break;
        case 53: M = text_M.m53
            break;
        case 54: M = text_M.m54
            break;
        case 55: M = text_M.m55
            break;
        case 56: M = text_M.m56
            break;
        case 57: M = text_M.m57
            break;
        case 58: M = text_M.m58
            break;
        case 59: M = text_M.m59
            break;
        default: M = text_M.m60
            break;
    }

    switch (seconds) {
        case 1: S = text_S.s1
            break;
        case 2: S = text_S.s2
            break;
        case 3: S = text_S.s3
            break;
        case 4: S = text_S.s4
            break;
        case 5: S = text_S.s5
            break;
        case 6: S = text_S.s6
            break;
        case 7: S = text_S.s7
            break;
        case 8: S = text_S.s8
            break;
        case 9: S = text_S.s9
            break;
        case 10: S = text_S.s10
            break;
        case 11: S = text_S.s11
            break;
        case 12: S = text_S.s12
            break;
        case 13: S = text_S.s13
            break;
        case 14: S = text_S.s14
            break;
        case 15: S = text_S.s15
            break;
        case 16: S = text_S.s16
            break;
        case 17: S = text_S.s17
            break;
        case 18: S = text_S.s18
            break;
        case 19: S = text_S.s19
            break;
        case 20: S = text_S.s20
            break;
        case 21: S = text_S.s21
            break;
        case 22: S = text_S.s22
            break;
        case 23: S = text_S.s23
            break;
        case 24: S = text_S.s24
            break;
        case 25: S = text_S.s25
            break;
        case 26: S = text_S.s26
            break;
        case 27: S = text_S.s27
            break;
        case 28: S = text_S.s28
            break;
        case 29: S = text_S.s29
            break;
        case 30: S = text_S.s30
            break;
        case 31: S = text_S.s31
            break;
        case 32: S = text_S.s32
            break;
        case 33: S = text_S.s33
            break;
        case 34: S = text_S.s34
            break;
        case 35: S = text_S.s35
            break;
        case 36: S = text_S.s36
            break;
        case 37: S = text_S.s37
            break;
        case 38: S = text_S.s38
            break;
        case 39: S = text_S.s39
            break;
        case 40: S = text_S.s40
            break;
        case 41: S = text_S.s41
            break;
        case 42: S = text_S.s42
            break;
        case 43: S = text_S.s43
            break;
        case 44: S = text_S.s44
            break;
        case 45: S = text_S.s45
            break;
        case 46: S = text_S.s46
            break;
        case 47: S = text_S.s47
            break;
        case 48: S = text_S.s48
            break;
        case 49: S = text_S.s49
            break;
        case 50: S = text_S.s50
            break;
        case 51: S = text_S.s51
            break;
        case 52: S = text_S.s52
            break;
        case 53: S = text_S.s53
            break;
        case 54: S = text_S.s54
            break;
        case 55: S = text_S.s55
            break;
        case 56: S = text_S.s56
            break;
        case 57: S = text_S.s57
            break;
        case 58: S = text_S.s58
            break;
        case 59: S = text_S.s59
            break;
        default: S = text_S.s60
            break;
    }

    clock.innerHTML = AP + " " + H + "시" + ":" + M + "분" + ":" + S + "초";
    setTimeout("time()", 1000);

}

time();