import { IPohUser } from '../utils/types';

interface IProps {
  pohUser: IPohUser;
}

function UserPohProfile({ pohUser }: IProps) {
  return (
    <>
      {pohUser?.registered && (
        <a href=''>
          <span>
            <svg
              fill='none'
              height='32'
              width='32'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 45 52'
              className='css-vurnku'>
              <path
                d='M41.51 34.9687C41.9493 35.7368 41.883 36.473 41.0942 37.5757C40.9089 37.8348 40.8611 38.0671 40.9044 38.4203L40.9086 38.4528C40.9227 38.5576 40.9392 38.648 40.9741 38.8093L41.0554 39.1765L41.0812 39.2976C41.1346 39.5542 41.1626 39.7335 41.1785 39.939L41.1824 39.9943C41.2104 40.4197 41.1631 40.8221 41.0203 41.2227C40.7107 42.0914 39.9746 42.8753 38.7154 43.6576L38.6162 43.7186C38.0038 44.091 37.3513 44.3684 36.6437 44.5719L36.5337 44.603C35.7473 44.822 35.1308 44.9134 33.8167 45.043L33.345 45.089C31.9391 45.2304 31.3469 45.3694 30.8733 45.7073L30.8546 45.7209C30.2882 46.137 29.9797 46.9185 29.9667 48.3559L29.9661 48.493C29.9537 49.771 29.3678 50.7602 28.2622 51.3483C27.258 51.8825 25.8459 52.0784 24.012 51.9722C20.5206 51.77 15.3605 50.4564 8.49876 48.0352L7.67581 47.7448L8.02606 46.9456C9.86213 42.7561 9.07559 37.8049 5.58801 32.0358L4.57697 30.3603C3.56997 28.6862 3.16391 27.9847 2.66566 27.0625L2.49308 26.7411L2.39857 26.5628C1.52612 24.907 0.922618 23.4868 0.530217 22.1039C-0.7637 17.5437 0.254432 13.1777 4.20497 7.12461C9.07059 -0.330555 17.9961 -1.90908 30.7681 2.26747C37.4757 4.5276 40.8611 9.79228 40.8611 17.8732V18.0588L40.7803 18.226C39.9038 20.0386 39.9038 21.5211 40.728 22.7759C41.0039 23.196 41.3356 23.6446 41.8104 24.2498L41.9863 24.4729L42.6765 25.3423C43.3955 26.2519 43.685 26.6434 43.9971 27.1372L44.0804 27.2705L44.1279 27.3486C44.7045 28.3066 44.9232 29.0791 44.6413 29.7934C44.4514 30.2746 44.0761 30.6332 43.557 30.9189C43.1983 31.1164 42.7922 31.2713 42.24 31.441L42.116 31.4784C41.9392 31.5312 41.6686 31.6106 41.521 31.6543L41.3943 31.6924L41.3249 31.7139C41.1902 31.7562 41.0792 31.794 40.9885 31.8286L41.0256 31.8825C41.0612 31.9335 41.1039 31.9934 41.1549 32.0637L41.2386 32.1785L41.2922 32.2528C41.5609 32.6283 41.7022 32.8788 41.7979 33.2109C41.9541 33.7528 41.8696 34.2992 41.5226 34.8037L41.5019 34.8333C41.4944 34.8438 41.4875 34.8538 41.4812 34.8633L41.4639 34.89L41.51 34.9687ZM39.2369 17.4742C39.1314 10.2909 36.1559 5.79348 30.2572 3.80586C18.1147 -0.164776 9.95669 1.27803 5.56277 8.01044C1.8485 13.7015 0.938563 17.6036 2.08997 21.6615C2.45461 22.9466 3.03042 24.2935 3.87971 25.8957L4.0394 26.1943C4.58742 27.2122 4.99978 27.9218 6.21692 29.941L6.97556 31.1973C10.5016 37.03 11.4767 42.2417 9.83494 46.7853C16.1665 48.9816 20.9331 50.1701 24.1057 50.3539L24.2299 50.3606C25.7299 50.4359 26.8244 50.277 27.5006 49.9173C28.0727 49.6129 28.3364 49.1725 28.3447 48.4857L28.3451 48.3921C28.3552 46.4336 28.866 45.1481 29.9316 44.3878C30.3942 44.0577 30.9364 43.8434 31.5969 43.6997L31.659 43.6864C32.0615 43.6017 32.4485 43.5496 33.1047 43.4837L33.7037 43.4252C34.8951 43.307 35.4427 43.2245 36.1112 43.0379L36.1956 43.014C36.7699 42.8489 37.29 42.6277 37.7737 42.3336L37.8595 42.2809C38.8319 41.6773 39.3234 41.1547 39.4931 40.6786C39.6076 40.3573 39.5948 40.0852 39.4549 39.4478L39.3975 39.1892L39.3826 39.1205C39.3428 38.9347 39.3219 38.8184 39.3019 38.6698L39.2966 38.6295C39.2062 37.9064 39.3262 37.2778 39.7516 36.6667L39.7999 36.5983C39.9358 36.4053 40.031 36.2426 40.0905 36.1091C40.1315 36.0171 40.1507 35.951 40.156 35.9066L40.1569 35.8974C40.1586 35.8769 40.1574 35.8689 40.124 35.8104L40.0557 35.6934L40.0287 35.6463C39.7175 35.0935 39.7274 34.5483 40.1596 33.9238L40.1862 33.8859L40.1976 33.8688C40.2993 33.7102 40.26 33.5904 39.9374 33.1456L39.7607 32.9035L39.7033 32.8236C39.6444 32.7406 39.6104 32.6889 39.5685 32.6207L39.52 32.5401C39.3802 32.3013 39.289 32.0723 39.2542 31.8221C39.2447 31.7539 39.2398 31.6854 39.2398 31.6166C39.2398 31.1016 39.5394 30.7531 39.9902 30.5048C40.22 30.3782 40.4856 30.2771 40.871 30.1574L41.0139 30.1139C41.1414 30.076 41.4074 29.9979 41.5951 29.9421L41.7635 29.8916L41.8416 29.8673C42.6488 29.6129 43.0609 29.3816 43.1331 29.1984C43.1355 29.1925 43.138 29.1763 43.1373 29.1441C43.1351 29.0874 43.1212 29.0119 43.0926 28.9192C43.0278 28.7089 42.898 28.4435 42.7032 28.1261L42.6429 28.0293C42.3695 27.5947 42.1058 27.236 41.4519 26.4076L40.7147 25.4786L40.5707 25.2961L40.4468 25.1378C40.0166 24.5865 39.697 24.1533 39.4202 23.7374L39.3729 23.6658C38.2516 21.9589 38.2126 19.9595 39.2087 17.7594L39.2392 17.6927L39.2369 17.4742Z'
                fill='#ff6800'></path>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M6.28191 31.6175C0.862986 22.6537 -2.06065 18.2092 4.884 7.5685C9.51376 0.474712 18.0555 -1.03595 30.5093 3.0365C36.8701 5.17979 40.0506 10.1257 40.0506 17.8742C39.0576 19.9277 39.0576 21.7102 40.0506 23.2218C41.54 25.4893 44.3993 28.1995 43.8873 29.4969C43.3753 30.7943 40.0506 30.7943 40.0506 31.6175C40.0506 32.4408 41.6318 33.2522 40.8412 34.3649C40.0506 35.4776 41.7839 35.2196 40.435 37.1052C39.0862 38.9908 42.3099 40.5248 38.1951 43.0271C34.0802 45.5294 29.1557 42.4395 29.1557 48.4527C29.1557 52.4614 22.36 52.0678 8.76868 47.2718C10.7234 42.8115 9.89452 37.5934 6.28191 31.6175Z'
                fill='#fffcf0'></path>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M37.995 16.8356C37.0488 10.6644 35.1612 7.13188 32.3324 6.2381C28.0892 4.89744 15.9357 -0.155035 9.33711 5.45408C4.93803 9.19349 2.58687 14.0179 2.28365 19.9274C2.83675 22.1888 4.20875 24.8501 6.39965 27.9115C9.68601 32.5036 10.64 31.5259 10.64 29.6321C10.64 27.7382 16.6733 32.7308 18.4184 25.9198C19.5817 21.3791 21.8229 19.7434 25.1419 21.0125C30.8764 21.6092 34.4548 21.2475 35.8773 19.9274C37.2998 18.6073 38.0057 17.5767 37.995 16.8356Z'
                fill='url(#paint0_linear)'></path>
              <path
                d='M20.0812 24.3865C23.6425 24.3865 26.5295 21.5 26.5295 17.9393C26.5295 14.3787 23.6425 11.4922 20.0812 11.4922C16.5198 11.4922 13.6328 14.3787 13.6328 17.9393C13.6328 21.5 16.5198 24.3865 20.0812 24.3865Z'
                fill='white'></path>
              <path
                d='M20.0883 23.8716C23.3688 23.8716 26.0282 21.2128 26.0282 17.9329C26.0282 14.653 23.3688 11.9941 20.0883 11.9941C16.8078 11.9941 14.1484 14.653 14.1484 17.9329C14.1484 21.2128 16.8078 23.8716 20.0883 23.8716Z'
                fill='#ff6800'></path>
              <path
                d='M22.3275 18.0227L20.0805 19.4284L17.832 18.0227L20.0805 14.0723L22.3275 18.0227ZM20.0798 19.8829L17.832 18.4932L20.0798 21.8088L22.3275 18.4932L20.0798 19.8829Z'
                fill='white'></path>
              <path
                d='M7.45068 26.1686C7.92697 25.1232 8.39984 24.5537 8.84678 24.4424C9.26886 24.3372 9.73441 24.6434 10.2468 25.4148C11.4912 27.2887 12.9299 27.2307 14.3702 25.2702L14.4351 25.1818L14.1488 24.5741L13.9656 24.8236C13.3429 25.6711 12.7625 26.0956 12.2315 26.119C11.7152 26.1418 11.1995 25.7839 10.6835 25.0153L10.6679 24.9919C10.0423 24.0499 9.3979 23.6329 8.74042 23.7934C8.10675 23.948 7.52645 24.6355 6.97921 25.8367L6.93359 25.9368L7.32281 26.4493L7.45068 26.1686ZM7.29361 25.8016L7.31454 25.9894C7.32476 25.9669 7.33499 25.9447 7.34522 25.9227L7.36057 25.8898L7.29361 25.8016ZM14.055 25.2396L14.0732 25.0521C14.0586 25.0719 14.0441 25.0914 14.0296 25.1108L14.0079 25.1396L14.055 25.2396Z'
                fill='white'></path>
              <path
                d='M5.53466 19.0959C6.46494 17.054 7.30447 16.8267 8.3005 18.2971L8.33073 18.3421C9.57521 20.2161 11.0138 20.158 12.4541 18.1975L12.519 18.1091L12.2328 17.5014L12.0495 17.7509C10.8307 19.4099 9.80403 19.4713 8.78281 17.9653L8.75187 17.9192C7.48539 16.0122 6.17069 16.3331 5.0632 18.764L5.01758 18.8641L5.4068 19.3766L5.53466 19.0959ZM5.37759 18.7289L5.39852 18.9167L5.42153 18.8665L5.44452 18.8171L5.37759 18.7289ZM8.41286 18.0753L8.4449 18.123C9.62551 19.9007 10.9709 19.8414 12.3465 17.9689L12.0313 17.9384L12.0919 18.0669C10.8364 19.7271 9.73719 19.76 8.67003 18.1865L8.6377 18.1383C7.44699 16.3454 6.24662 16.6445 5.19933 18.9432L5.51372 18.9082L5.44452 18.8171C6.41781 16.7369 7.35682 16.5174 8.41286 18.0753ZM12.1389 18.1669L12.1571 17.9794L12.1245 18.0235L12.0919 18.0669L12.1389 18.1669Z'
                fill='white'></path>
              <path
                d='M8.26122 12.0217C9.19151 9.97979 10.031 9.75252 11.0271 11.2228L11.0573 11.2679C12.3018 13.1418 13.7404 13.0838 15.1807 11.1232L15.2456 11.0349L14.9594 10.4272L14.7761 10.6766C13.5573 12.3356 12.5306 12.397 11.5094 10.8911L11.4784 10.845C10.212 8.93797 8.89725 9.25888 7.78976 11.6897L7.74414 11.7899L8.13336 12.3024L8.26122 12.0217ZM8.10415 11.6547L8.12509 11.8425L8.14809 11.7923L8.17108 11.7428L8.10415 11.6547ZM11.1394 11.001L11.1715 11.0488C12.3521 12.8265 13.6975 12.7671 15.0731 10.8947L14.7579 10.8642L14.8184 10.9927C13.5629 12.6528 12.4638 12.6858 11.3966 11.1123L11.3643 11.0641C10.1736 9.27119 8.97318 9.57026 7.92589 11.869L8.24029 11.834L8.17108 11.7428C9.14437 9.66268 10.0834 9.44319 11.1394 11.001ZM14.8655 11.0927L14.8837 10.9051L14.851 10.9493L14.8184 10.9927L14.8655 11.0927Z'
                fill='white'></path>
              <path
                d='M13.4204 6.93819C13.8967 5.89276 14.3696 5.32325 14.8165 5.21189C15.2386 5.10673 15.7041 5.41291 16.2165 6.18439C17.461 8.05829 18.8996 8.00024 20.3399 6.03971L20.4048 5.95136L20.1186 5.34364L19.9353 5.59311C19.3127 6.44065 18.7322 6.86514 18.2012 6.88858C17.6849 6.91137 17.1692 6.55345 16.6533 5.78489L16.6376 5.76147C16.012 4.81948 15.3676 4.4024 14.7102 4.56288C14.0765 4.71756 13.4962 5.40508 12.9489 6.60623L12.9033 6.70636L13.2925 7.21884L13.4204 6.93819ZM13.2633 6.57119L13.2843 6.75895C13.2945 6.73651 13.3047 6.71428 13.3149 6.69225L13.3303 6.65936L13.2633 6.57119ZM20.0247 6.00914L20.0429 5.82162C20.0284 5.8414 20.0139 5.86097 19.9994 5.88033L19.9777 5.90919L20.0247 6.00914Z'
                fill='white'></path>
              <path
                d='M22.7056 9.59202C23.6358 7.5501 24.4754 7.32284 25.4714 8.79314L25.5016 8.83821C26.7461 10.7121 28.1847 10.6541 29.625 8.69353L29.6899 8.60519L29.4037 7.99747L29.2204 8.24694C28.0016 9.90595 26.9749 9.96732 25.9537 8.46141L25.9228 8.4153C24.6563 6.50828 23.3416 6.82919 22.2341 9.26006L22.1885 9.36019L22.5777 9.87267L22.7056 9.59202ZM22.5485 9.22502L22.5694 9.41277L22.5924 9.36261L22.6154 9.31314L22.5485 9.22502ZM25.5838 8.57133L25.6158 8.61908C26.7964 10.3968 28.1418 10.3374 29.5174 8.46503L29.2022 8.43446L29.2628 8.56302C28.0073 10.2231 26.9081 10.2561 25.8409 8.6826L25.8086 8.63443C24.6179 6.8415 23.4175 7.14057 22.3702 9.4393L22.6846 9.40426L22.6154 9.31314C23.5887 7.233 24.5277 7.0135 25.5838 8.57133ZM29.3098 8.66297L29.328 8.47544L29.2954 8.5196L29.2628 8.56302L29.3098 8.66297Z'
                fill='white'></path>
              <path
                d='M27.5688 15.2624C28.0451 14.217 28.518 13.6475 28.9649 13.5361C29.387 13.431 29.8526 13.7371 30.3649 14.5086C31.6094 16.3825 33.048 16.3245 34.4883 14.3639L34.5532 14.2756L34.267 13.6679L34.0837 13.9173C33.4611 14.7649 32.8806 15.1894 32.3496 15.2128C31.8333 15.2356 31.3176 14.8777 30.8017 14.1091L30.7861 14.0857C30.1605 13.1437 29.5161 12.7266 28.8586 12.8871C28.2249 13.0418 27.6446 13.7293 27.0974 14.9305L27.0518 15.0306L27.441 15.5431L27.5688 15.2624ZM27.4118 14.8954L27.4327 15.0832C27.4429 15.0607 27.4532 15.0385 27.4634 15.0165L27.4787 14.9836L27.4118 14.8954ZM34.1731 14.3334L34.1913 14.1458C34.1768 14.1656 34.1623 14.1852 34.1478 14.2045L34.1261 14.2334L34.1731 14.3334Z'
                fill='white'></path>
              <defs>
                <linearGradient
                  id='paint0_linear'
                  x1='8.253'
                  y1='17.0387'
                  x2='28.6708'
                  y2='10.5243'
                  gradientUnits='userSpaceOnUse'>
                  <stop stop-color='#ff9900'></stop>
                  <stop offset='1' stop-color='#ffc700'></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </a>
      )}
    </>
  );
}
export default UserPohProfile;
