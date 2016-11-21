dataContext = {title: 'Risultati sondaggio Referendum 2016',
author: '', description:'Esperimento di sondaggio Social per il prossimo referendum costituzionale.',
excerpt:'Esperimento di sondaggio Social per il prossimo referendum costituzionale.'};


Template.MainLayout.helpers({
  shareData:function(){
    return dataContext;
  }
})
