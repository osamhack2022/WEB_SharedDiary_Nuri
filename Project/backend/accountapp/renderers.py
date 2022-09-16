import json

from rest_framework.renderers import JSONRenderer


class UserJSONRenderer(JSONRenderer):
    charset = 'utf-8'
    
    def render(self, data, media_type=None, renderer_context=None):
        # 만약 토큰 받으면 토큰은 byte형태
        # byte는 직렬화안되니까 rendering전에 decode해야함
        # 따라서 data안에있는 token받고,
        token = data.get('token', None)
        
        # token이 byte형태일 경우
        if token is not None and isinstance(token, bytes):
            # 'utf-8'로 decode 해준 후 다시 data의 'token' 부분에 추가
            data['token'] = token.decode('utf-8')
        
        # 그리고 data를 'user' 안에 담아 json 형태로 render
        return json.dumps({
            'user': data
        })