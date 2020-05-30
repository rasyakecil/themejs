let head = document['getElementsByTagName']('head')[0] || document['head'],
    body = document['getElementsByTagName']('body')[0] || document['body'];
let a = document['createElement']('script');
a['type'] = 'text/javascript';
a['src'] = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
a['async'] = true;
a['onload'] = function() {
    textrim();
    $(document)['scroll'](function() {
        return $(document)['scrollTop']() > 300 ? $('.ignielToTop')['addClass']('show') : $('.ignielToTop')['removeClass']('show')
    }), $('.ignielToTop')['click'](function() {
        return $('html,body')['animate']({
            scrollTop: '0'
        })
    });
    $('footer')['removeAttr']('style')['css']({
        'display': 'block',
        'visibility': 'visible',
        'opacity': '1'
    });
    $('footer .inner')['removeAttr']('style')['css']({
        'visibility': 'visible',
        'opacity': '1'
    });
    $('footer .inner .right')['removeAttr']('style')['css']({
        'visibility': 'visible',
        'opacity': '1'
    });
    let _0xfc89x4 = $('.textrimMenu .inner ul li a:not(:only-child)');
    _0xfc89x4['click'](function(a) {
        a['preventDefault']();
        $(this)['next']('ul')['slideToggle'](100);
        $(this)['parent']()['toggleClass']('open');
        if ($(this)['parent']()['hasClass']('open')) {
            let _0xfc89x5 = document['querySelector']('.textrimMenu > .inner > ul > li')['getBoundingClientRect']()['left'];
            $('.textrimMenu .inner > ul')['css']({
                overflowX: 'unset',
                left: -Math['abs']($('.textrimMenu .inner > ul')['scrollLeft']())
            })
        } else {
            $('.textrimMenu .inner > ul')['removeAttr']('style')
        }
    })
};
head['appendChild'](a);
let footer = document['querySelector']('footer'),
    footerInner = document['querySelector']('footer .inner'),
    footerInnerRight = document['querySelector']('footer .inner .right'),
    cr1 = 'DO NOT remove credit',
    cr2 = 'Theme by <a href="https://www.igniel.com" rel="noopener" target="_blank" title="Igniel">Igniel</a>';
if (!footer) {
    let a = document['createElement']('footer');
    a['innerHTML'] = '<div class="inner"><div class="left">' + cr1 + '</div><div class="right">' + cr3 + '</div></div></div>';
    body['appendChild'](a)
} else {
    if (!footerInner) {
        let a = document['createElement']('div');
        a['className'] = 'inner';
        a['innerHTML'] = '<div class="left">' + cr1 + '</div><div class="right">' + cr3 + '</div></div>';
        document['querySelector']('footer')['appendChild'](a)
    } else {
        if (!footerInnerRight) {
            let a = document['createElement']('div');
            a['className'] = 'right';
            a['innerHTML'] = cr3;
            document['querySelector']('footer .inner')['appendChild'](a)
        } else {
            if (!footerInnerRight['innerHTML']['includes'](cr3)) {
                footerInnerRight['innerHTML'] = cr3
            }
        }
    }
}
