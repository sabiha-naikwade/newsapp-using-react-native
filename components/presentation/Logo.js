import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const Logo = ({color}) => {
  return (
    <Svg width="100" height="50" viewBox="0 0 200 70">
      <G
        id="Page-2"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd">
        <G
          id="Artboard"
          transform="translate(-180.000000, -134.000000)"
          fill={color}
          fill-rule="nonzero">
          <Path
            d="M201.44,185.16 C202.986674,185.16 204.333328,184.946669 205.48,184.52 C206.626672,184.093331 207.626662,183.613336 208.48,183.08 C209.333338,182.546664 210.05333,182.066669 210.64,181.64 C211.22667,181.213331 211.759998,181 212.24,181 C213.466673,181 214.08,181.799992 214.08,183.4 C214.08,183.773335 214.000001,184.29333 213.84,184.96 C213.679999,185.62667 213.466668,186.319996 213.2,187.04 C212.933332,187.760004 212.653335,188.439997 212.36,189.08 C212.066665,189.720003 211.786668,190.199998 211.52,190.52 C211.253332,190.786668 210.78667,191.21333 210.12,191.8 C209.45333,192.38667 208.560006,192.97333 207.44,193.56 C206.319994,194.14667 205.013341,194.666664 203.52,195.12 C202.026659,195.573336 200.373342,195.8 198.56,195.8 C196.533323,195.8 194.440011,195.493336 192.28,194.88 C190.119989,194.266664 188.160009,193.200008 186.4,191.68 C184.639991,190.159992 183.186672,188.10668 182.04,185.52 C180.893328,182.93332 180.32,179.693353 180.32,175.8 C180.32,174.413326 180.413332,172.826676 180.6,171.04 C180.786668,169.253324 181.17333,167.413343 181.76,165.52 C182.34667,163.626657 183.133328,161.760009 184.12,159.92 C185.106672,158.079991 186.426658,156.440007 188.08,155 C189.733342,153.559993 191.719988,152.400004 194.04,151.52 C196.360012,150.639996 199.119984,150.2 202.32,150.2 C204.933346,150.2 207.186657,150.506664 209.08,151.12 C210.973343,151.733336 212.533327,152.559995 213.76,153.6 C214.986673,154.640005 215.906664,155.853326 216.52,157.24 C217.133336,158.626674 217.44,160.119992 217.44,161.72 C217.44,164.600014 216.533342,166.719993 214.72,168.08 C212.906658,169.440007 210.346683,170.12 207.04,170.12 C206.239996,170.12 205.693335,170.053334 205.4,169.92 C205.106665,169.786666 204.96,169.480002 204.96,169 C204.96,167.719994 204.933334,166.573338 204.88,165.56 C204.826666,164.546662 204.680001,163.693337 204.44,163 C204.199999,162.306663 203.840002,161.773335 203.36,161.4 C202.879998,161.026665 202.186671,160.84 201.28,160.84 C199.626658,160.84 198.306672,161.373328 197.32,162.44 C196.333328,163.506672 195.586669,164.799992 195.08,166.32 C194.573331,167.840008 194.253334,169.399992 194.12,171 C193.986666,172.600008 193.92,173.933328 193.92,175 C193.92,178.786686 194.519994,181.426659 195.72,182.92 C196.920006,184.413341 198.826654,185.16 201.44,185.16 Z M230.584615,195.72 C227.277932,195.72 224.904623,194.840009 223.464615,193.08 C222.024608,191.319991 221.304615,188.413354 221.304615,184.36 C221.304615,183.719997 221.344615,182.920005 221.424615,181.96 C221.504616,180.999995 221.611281,179.760008 221.744615,178.24 C221.877949,176.719992 222.051281,174.840011 222.264615,172.6 C222.47795,170.359989 222.704614,167.640016 222.944615,164.44 C223.184617,161.239984 223.451281,157.480022 223.744615,153.16 C224.03795,148.839978 224.344614,143.826695 224.664615,138.12 C224.717949,136.946661 224.851281,136.253334 225.064615,136.04 C225.224616,135.879999 225.651279,135.8 226.344615,135.8 L229.464615,135.8 C231.064623,135.8 232.397943,135.986665 233.464615,136.36 C234.531287,136.733335 235.384612,137.239997 236.024615,137.88 C236.664619,138.520003 237.117947,139.253329 237.384615,140.08 C237.651283,140.906671 237.784615,141.773329 237.784615,142.68 C237.784615,143.746672 237.717949,145.27999 237.584615,147.28 C237.451281,149.28001 237.27795,151.533321 237.064615,154.04 C236.851281,156.546679 236.63795,159.159986 236.424615,161.88 C236.211281,164.600014 235.99795,167.199988 235.784615,169.68 C235.571281,172.160012 235.397949,174.386657 235.264615,176.36 C235.131281,178.333343 235.064615,179.826662 235.064615,180.84 C235.064615,182.226674 235.317946,183.21333 235.824615,183.8 C236.331285,184.38667 236.877946,184.799999 237.464615,185.04 C238.051285,185.280001 238.597946,185.44 239.104615,185.52 C239.611285,185.6 239.864615,185.773332 239.864615,186.04 C239.864615,187.213339 239.731283,188.373328 239.464615,189.52 C239.197947,190.666672 238.717952,191.706662 238.024615,192.64 C237.331279,193.573338 236.384621,194.319997 235.184615,194.88 C233.984609,195.440003 232.451291,195.72 230.584615,195.72 Z M253.089231,195 C251.435889,195 250.089236,194.826668 249.049231,194.48 C248.009226,194.133332 247.182567,193.640003 246.569231,193 C245.955894,192.359997 245.529232,191.573338 245.289231,190.64 C245.04923,189.706662 244.929231,188.626673 244.929231,187.4 C244.929231,186.599996 244.96923,185.466674 245.049231,184 C245.129231,182.533326 245.275896,180.50668 245.489231,177.92 C245.702565,175.33332 245.955896,172.053353 246.249231,168.08 C246.542566,164.106647 246.902562,159.186696 247.329231,153.32 C247.382564,152.146661 247.515896,151.453334 247.729231,151.24 C247.889232,151.079999 248.315894,151 249.009231,151 L252.129231,151 C253.782572,151 255.129226,151.159998 256.169231,151.48 C257.209236,151.800002 258.035894,152.279997 258.649231,152.92 C259.262567,153.560003 259.68923,154.333329 259.929231,155.24 C260.169232,156.146671 260.289231,157.159994 260.289231,158.28 C260.289231,159.080004 260.235898,160.279992 260.129231,161.88 C260.022564,163.480008 259.875898,165.65332 259.689231,168.4 C259.502563,171.14668 259.249232,174.55998 258.929231,178.64 C258.609229,182.72002 258.209233,187.639971 257.729231,193.4 C257.675897,194.040003 257.542565,194.466666 257.329231,194.68 C257.115896,194.893334 256.662568,195 255.969231,195 L253.089231,195 Z M247.409231,141.56 C247.409231,139.426656 248.182556,137.746673 249.729231,136.52 C251.275905,135.293327 253.355884,134.68 255.969231,134.68 C258.262576,134.68 259.929226,135.146662 260.969231,136.08 C262.009236,137.013338 262.529231,138.253326 262.529231,139.8 C262.529231,141.773343 261.795905,143.413327 260.329231,144.72 C258.862557,146.026673 256.715912,146.68 253.889231,146.68 C249.569209,146.68 247.409231,144.97335 247.409231,141.56 Z M286.873846,185.16 C288.420521,185.16 289.767174,184.946669 290.913846,184.52 C292.060519,184.093331 293.060509,183.613336 293.913846,183.08 C294.767184,182.546664 295.487177,182.066669 296.073846,181.64 C296.660516,181.213331 297.193844,181 297.673846,181 C298.900519,181 299.513846,181.799992 299.513846,183.4 C299.513846,183.773335 299.433847,184.29333 299.273846,184.96 C299.113845,185.62667 298.900514,186.319996 298.633846,187.04 C298.367178,187.760004 298.087181,188.439997 297.793846,189.08 C297.500511,189.720003 297.220514,190.199998 296.953846,190.52 C296.687178,190.786668 296.220516,191.21333 295.553846,191.8 C294.887176,192.38667 293.993852,192.97333 292.873846,193.56 C291.753841,194.14667 290.447187,194.666664 288.953846,195.12 C287.460505,195.573336 285.807189,195.8 283.993846,195.8 C281.967169,195.8 279.873857,195.493336 277.713846,194.88 C275.553835,194.266664 273.593855,193.200008 271.833846,191.68 C270.073837,190.159992 268.620519,188.10668 267.473846,185.52 C266.327174,182.93332 265.753846,179.693353 265.753846,175.8 C265.753846,174.413326 265.847179,172.826676 266.033846,171.04 C266.220514,169.253324 266.607177,167.413343 267.193846,165.52 C267.780516,163.626657 268.567175,161.760009 269.553846,159.92 C270.540518,158.079991 271.860505,156.440007 273.513846,155 C275.167188,153.559993 277.153835,152.400004 279.473846,151.52 C281.793858,150.639996 284.55383,150.2 287.753846,150.2 C290.367193,150.2 292.620503,150.506664 294.513846,151.12 C296.407189,151.733336 297.967173,152.559995 299.193846,153.6 C300.420519,154.640005 301.34051,155.853326 301.953846,157.24 C302.567183,158.626674 302.873846,160.119992 302.873846,161.72 C302.873846,164.600014 301.967189,166.719993 300.153846,168.08 C298.340504,169.440007 295.780529,170.12 292.473846,170.12 C291.673842,170.12 291.127181,170.053334 290.833846,169.92 C290.540511,169.786666 290.393846,169.480002 290.393846,169 C290.393846,167.719994 290.36718,166.573338 290.313846,165.56 C290.260513,164.546662 290.113847,163.693337 289.873846,163 C289.633845,162.306663 289.273849,161.773335 288.793846,161.4 C288.313844,161.026665 287.620517,160.84 286.713846,160.84 C285.060505,160.84 283.740518,161.373328 282.753846,162.44 C281.767175,163.506672 281.020515,164.799992 280.513846,166.32 C280.007177,167.840008 279.68718,169.399992 279.553846,171 C279.420512,172.600008 279.353846,173.933328 279.353846,175 C279.353846,178.786686 279.95384,181.426659 281.153846,182.92 C282.353852,184.413341 284.2605,185.16 286.873846,185.16 Z M315.858462,195 C312.87178,195 310.738468,194.413339 309.458462,193.24 C308.178455,192.066661 307.538462,190.386678 307.538462,188.2 C307.538462,187.133328 307.618461,185.30668 307.778462,182.72 C307.938462,180.13332 308.151794,177.186683 308.418462,173.88 C308.68513,170.573317 308.951794,167.080018 309.218462,163.4 C309.48513,159.719982 309.751794,156.25335 310.018462,153 C310.28513,149.74665 310.498461,146.893346 310.658462,144.44 C310.818462,141.986654 310.898462,140.306671 310.898462,139.4 C310.898462,138.599996 311.325124,138.2 312.178462,138.2 L316.578462,138.2 C319.831811,138.2 322.018456,138.893326 323.138462,140.28 C324.258467,141.666674 324.818462,143.719986 324.818462,146.44 C324.818462,146.706668 324.778462,147.559993 324.698462,149 C324.618461,150.440007 324.498462,152.253322 324.338462,154.44 C324.178461,156.626678 324.005129,159.066653 323.818462,161.76 C323.631794,164.453347 323.445129,167.213319 323.258462,170.04 C323.071794,172.866681 322.885129,175.626653 322.698462,178.32 C322.511794,181.013347 322.338462,183.453322 322.178462,185.64 C322.018461,187.826678 321.885129,189.653326 321.778462,191.12 C321.671794,192.586674 321.591795,193.479998 321.538462,193.8 C321.485128,194.226669 321.378462,194.533332 321.218462,194.72 C321.058461,194.906668 320.738464,195 320.258462,195 L315.858462,195 Z M335.323077,139.4 C335.376411,138.973331 335.549742,138.666668 335.843077,138.48 C336.136412,138.293332 336.416409,138.2 336.683077,138.2 C340.309762,138.2 343.709728,138.080001 346.883077,137.84 C350.056426,137.599999 352.549735,137.48 354.363077,137.48 C358.896433,137.48 362.696395,137.933329 365.763077,138.84 C368.829759,139.746671 371.309734,141.15999 373.203077,143.08 C375.09642,145.00001 376.443073,147.479985 377.243077,150.52 C378.043081,153.560015 378.443077,157.213312 378.443077,161.48 C378.443077,165.800022 378.003081,170.026646 377.123077,174.16 C376.243073,178.293354 374.709755,181.959984 372.523077,185.16 C370.336399,188.360016 367.389762,190.933324 363.683077,192.88 C359.976392,194.826676 355.296439,195.8 349.643077,195.8 C347.029731,195.8 344.643088,195.746667 342.483077,195.64 C340.323066,195.533333 338.469751,195.213336 336.923077,194.68 C335.376403,194.146664 334.176415,193.346672 333.323077,192.28 C332.469739,191.213328 332.043077,189.746676 332.043077,187.88 C332.043077,187.186663 332.083077,186.146674 332.163077,184.76 C332.243077,183.373326 332.349743,181.72001 332.483077,179.8 C332.616411,177.87999 332.776409,175.760012 332.963077,173.44 C333.149745,171.119988 333.349743,168.680013 333.563077,166.12 C333.989746,160.839974 334.323076,156.626682 334.563077,153.48 C334.803078,150.333318 334.963077,147.866676 335.043077,146.08 C335.123077,144.293324 335.17641,142.946671 335.203077,142.04 C335.229744,141.133329 335.269743,140.253338 335.323077,139.4 Z M350.203077,183.16 C353.189759,183.16 355.576401,182.520006 357.363077,181.24 C359.149753,179.959994 360.523072,178.333343 361.483077,176.36 C362.443082,174.386657 363.083075,172.226678 363.403077,169.88 C363.723079,167.533322 363.883077,165.32001 363.883077,163.24 C363.883077,160.999989 363.736412,159.040008 363.443077,157.36 C363.149742,155.679992 362.643081,154.280006 361.923077,153.16 C361.203073,152.039994 360.203083,151.200003 358.923077,150.64 C357.643071,150.079997 356.043087,149.8 354.123077,149.8 C353.536407,149.8 352.789748,149.826666 351.883077,149.88 C350.976406,149.933334 349.883083,150.013333 348.603077,150.12 C348.49641,152.093343 348.363078,154.426653 348.203077,157.12 C348.043076,159.813347 347.869745,162.639985 347.683077,165.6 C347.496409,168.560015 347.296411,171.546652 347.083077,174.56 C346.869743,177.573348 346.656411,180.359987 346.443077,182.92 C347.243081,183.026667 347.963074,183.093333 348.603077,183.12 C349.24308,183.146667 349.776408,183.16 350.203077,183.16 Z"
            id="clicID"
          />
        </G>
      </G>
    </Svg>
  );
};

export default Logo;
