//= require templates/sentences

var ShortSentencesView = function(element) {
  
  this._element = element;
  
}

ShortSentencesView.prototype.setDelegate = function(delegate) {
  
  this._delegate = delegate;
  
}

ShortSentencesView.prototype.reload = function() {
  
  this._element.innerHTML = JST["templates/sentences"]({
    sentences: this._delegate.getCalculation("grammar.sentences").slice(0, 10),
    info: this._delegate.getCalculation("grammar.symbolInfo"),
    more: this._delegate.getCalculation("grammar.sentences").length > 10
  });
  
}
