import './App.css'
import ASCIIAnimation from './component/ASCIIAnimation'

function App() {

  const art = `
 ::::::::   :::::::: ::::::::::: :::::::::      :::     :::     ::: :::::::::: :::        :::        :::::::::: :::::::::  
:+:    :+: :+:    :+:    :+:     :+:    :+:   :+: :+:   :+:     :+: :+:        :+:        :+:        :+:        :+:    :+: 
+:+        +:+    +:+    +:+     +:+    +:+  +:+   +:+  +:+     +:+ +:+        +:+        +:+        +:+        +:+    +:+ 
+#+        +#+    +:+    +#+     +#++:++#:  +#++:++#++: +#+     +:+ +#++:++#   +#+        +#+        +#++:++#   +#++:++#:  
+#+        +#+    +#+    +#+     +#+    +#+ +#+     +#+  +#+   +#+  +#+        +#+        +#+        +#+        +#+    +#+ 
#+#    #+# #+#    #+#    #+#     #+#    #+# #+#     #+#   #+#+#+#   #+#        #+#        #+#        #+#        #+#    #+# 
 ########   ########     ###     ###    ### ###     ###     ###     ########## ########## ########## ########## ###    ### 
  `


  return (
    <div>
      <div className='heading'>
        <pre>
          {art}
        </pre>
      </div>

      <div className='animation'>
        <ASCIIAnimation
          fps={30}
          frameCount={126}
          frameFolder="frames"
        />
      </div>

      <div className='footer'>
        See the world around with coTraveller
      </div>

    </div>
  )
}

export default App
