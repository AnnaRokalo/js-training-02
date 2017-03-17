function LoggerLib() {
}

LoggerLib.prototype = {
    constructor: LoggerLib,

    TYPES: ['info', 'warning', 'error'],

    //get date and time in next format 'hh.mm dd/mm/yyyy'
    getDateTime: function() {
        var now, date, time, month;
        date = new Date();
        time = date.getHours() + ':' + date.getMinutes();
        month = date.getMonth() + 1;
        now =time + ' ' + date.getDate() + '/' + month + '/' + date.getFullYear();

        return now;
    },

    //log information in LocalStorage
    log: function (msg) {
        localStorage.clear();
        var dateStr = this.getDateTime();
        localStorage.setItem(dateStr, JSON.stringify(msg));
    },

    logConsole: function (msg, msgType) {
        var dateStr = this.getDateTime();
        var consoleLogStr = dateStr+ ": " + msg;

        switch(msgType) {
            case this.TYPES[0]:
                console.info(consoleLogStr);
                break;
            case this.TYPES[1]:
                console.warn(consoleLogStr);
                break;
            case this.TYPES[2]:
                console.error(consoleLogStr);
                break;
            default:
                alert('Неверный тип');
        }
    },

    logAlert: function (msg, msgType) {
        switch(msgType) {
            case this.TYPES[0]:
                alert(msgType + ': ' + msg);
                break;
            case this.TYPES[1]:
                alert(msgType + ': ' + msg);
                break;
            case this.TYPES[2]:
                alert(msgType + ': ' + msg);
                break;
            default:
                alert('Неверный тип');
        }
    },

    logAPI: function(url, msg, msgType) {
        var xhr = new XMLHttpRequest();
        var body = '' + encodeURIComponent(msgType) + ': ' + encodeURIComponent(msg);

        xhr.open("POST", url, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) return;
            if (xhr.status != 200) {
                // обработать ошибку
                alert(xhr.status + ': ' + xhr.statusText);
            } else {
                // вывести результат
                console.log("Data is transferred.");
                // alert(xhr.responseText);
            }

        };
        xhr.send(body);
    },

    logWindow: function (elem, msgType, msg) {
        var container, elements;
        switch(elem.charAt(0)) {
            case '.':
                elements = document.getElementsByClassName(elem.substring(1));
                if(elements) {
                    container = elements[0];
                    container.innerHTML = msg;
                    container.style.fontSize = '14px';
                    switch(msgType) {
                        case this.TYPES[0]:
                            container.style.color = 'blue';
                            break;
                        case this.TYPES[1]:
                            container.style.color = 'orange';
                            break;
                        case this.TYPES[2]:
                            container.style.color = 'red';
                            break;
                        default:
                            container.style.color = 'black';
                            alert('Неверный тип');
                    }
                }
                break;
            case '#':
                container = document.getElementById(elem.substring(1));
                if(container) {
                    container.innerHTML = msg;
                    container.style.fontSize = '14px';
                    switch(msgType) {
                        case this.TYPES[0]:
                            container.style.color = 'blue';
                            break;
                        case this.TYPES[1]:
                            container.style.color = 'orange';
                            break;
                        case this.TYPES[2]:
                            container.style.color = 'red';
                            break;
                        default:
                            container.style.color = 'black';
                            alert('Неверный тип');
                    }
                }
                break;
            case ' ':
            default:
                elements = document.getElementsByTagName(elem.trim());
                if(elements) {
                    container = elements[0];
                    container.innerHTML = msg;
                    container.style.fontSize = '14px';
                    switch(msgType) {
                        case this.TYPES[0]:
                            container.style.color = 'blue';
                            break;
                        case this.TYPES[1]:
                            container.style.color = 'orange';
                            break;
                        case this.TYPES[2]:
                            container.style.color = 'red';
                            break;
                        default:
                            container.style.color = 'black';
                            alert('Неверный тип');
                    }
                }
        }

    }
};